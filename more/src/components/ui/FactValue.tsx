import { Fact } from "@/lib/facts";
import { cn } from "@/lib/utils";

export default function FactValue({ fact, className }: { fact: Fact, className?: string }) {
  return (
    <span className={cn("inline-flex flex-col", className)}>
      <span className="font-bold">{fact.value}</span>
      {fact.status === "draft" && (
        <span className="text-[10px] text-amber-500 font-medium uppercase tracking-tighter">
          данные уточняются
        </span>
      )}
    </span>
  );
}
