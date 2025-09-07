import Navigator from "@/shared/navigator/Navigator";

const ReviewHeader = () => {
  return <Navigator onClick={() => window.history.back()} title="후기 작성" />;
};

export default ReviewHeader;
