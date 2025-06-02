import { MetarialUiButton } from "./metarial-ui-button";

const TestPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <MetarialUiButton>Primary Button</MetarialUiButton>
      <MetarialUiButton variant="outline">Outline Button</MetarialUiButton>
      <MetarialUiButton variant="ghost">Ghost Button</MetarialUiButton>
      <MetarialUiButton variant="destructive">Destructive Button</MetarialUiButton>
    </div>
  );
};

export default TestPage;
