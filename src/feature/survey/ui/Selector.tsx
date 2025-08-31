"use client";

import Navigator from "@/shared/navigator/Navigator";

const SurveySelector = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return <Navigator onClick={onClick} title={title} />;
};

export default SurveySelector;
