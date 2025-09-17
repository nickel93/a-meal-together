"use client";

import { useMemo, useState } from "react";
import Navigator from "@/shared/navigator/Navigator";
import { LzInput } from "@/shared/input";
import { LzButton } from "@/shared/button";
import { useRouter } from "next/navigation";
import { backdoorLogin, backdoorSignup } from "@/api/member/member";

const PASSWORD_RULE = /^(?=.*[A-Za-z])(?=.*\d).{8,20}$/; // 영문/숫자 포함 8~20자

export default function LocalSignup() {
  // 1) 로컬 계정
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [dupError, setDupError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  // ✅ 유효성
  const isUsernameValid = username.trim().length >= 4;
  const isPasswordValid =
    password.length === 0 ? false : PASSWORD_RULE.test(password);
  const isPassword2Valid =
    password2.length === 0 ? false : password2 === password;

  // ✅ 단계별 노출
  const showPassword = isUsernameValid;
  const showPassword2 = isUsernameValid && isPasswordValid;

  const canSubmit = useMemo(
    () => isUsernameValid && isPasswordValid && isPassword2Valid && !submitting,
    [isUsernameValid, isPasswordValid, isPassword2Valid, submitting]
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      setSubmitting(true);
      setDupError(null);
      // 1) 계정 생성
      await backdoorSignup(username, password);
      // 2) 로그인
      await backdoorLogin(username, password);
      // 3) 다음 단계
      router.push("/survey");
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err !== null &&
        ("status" in err || "code" in err) &&
        ((err as { status?: number }).status === 409 ||
          (err as { code?: number }).code === 409)
      ) {
        setDupError("중복된 아이디입니다.");
      } else {
        alert("회원가입에 실패했어요. 잠시 후 다시 시도해주세요.");
        console.error(err);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="h-screen bg-white flex flex-col flex-grow"
    >
      <div className="mb-6 text-center">
        <Navigator title="회원가입" />
      </div>

      <div className="mb-8 font-semibold text-[24px] leading-[36px] text-black">
        가치한상 이용을 위해
        <br />
        정보를 입력해 주세요.
      </div>

      {/* 1) 아이디 */}
      <LzInput
        label="아이디"
        type="text"
        placeholder="아이디(4자 이상)"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setDupError(null);
        }}
        error={username && !isUsernameValid ? "아이디는 4자 이상" : undefined}
      />
      {dupError && (
        <p className="text-sm text-white bg-black/70 rounded px-3 py-2 mb-2">
          {dupError}
        </p>
      )}

      {/* 2) 비밀번호 — 아이디 유효 시 노출 */}
      {showPassword && (
        <LzInput
          label="비밀번호"
          type="password"
          placeholder="영문, 숫자 포함 8~20자"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={
            password.length > 0 && !isPasswordValid
              ? "영문과 숫자를 포함한 8~20자"
              : undefined
          }
        />
      )}

      {/* 3) 비밀번호 확인 — 비밀번호 유효 시 노출 */}
      {showPassword2 && (
        <LzInput
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호 재입력"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          error={
            password2.length > 0 && !isPassword2Valid
              ? "비밀번호가 일치하지 않습니다."
              : undefined
          }
        />
      )}

      <div className="mt-auto">
        <LzButton type="submit" disabled={!canSubmit}>
          {submitting ? "처리 중..." : "다음"}
        </LzButton>
      </div>
    </form>
  );
}
