import { Card, CardContent } from "./ui/card";
import { NumberTicker } from "./ui/number-ticker";

export function InfoCard({
  value,
  caption,
  icon,
}: {
  value: string;
  caption: string;
  icon?: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-5">
        <div className="flex items-center justify-center gap-3 lg:gap-5">
          <NumberTicker
            data-testid="ticker"
            value={parseInt(value)}
            className="text-3xl font-medium tracking-tighter text-black whitespace-pre-wrap dark:text-white"
          />
          {icon}
        </div>
        <span className="text-lg text-muted-foreground">{caption}</span>
      </CardContent>
    </Card>
  );
}
