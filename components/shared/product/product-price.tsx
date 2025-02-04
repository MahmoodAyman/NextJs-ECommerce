import { cn } from "@/lib/utils";
const ProductPrice = ({
  value,
  classNames,
}: {
  value: string;
  classNames?: string;
}) => {
  // const stringValue = value.toFixed(2)  // it's already string in JSON.stringify
  const [intValue, floatValue] = value.split(".");
  return (
    <p className={cn("text-2xl", classNames)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
