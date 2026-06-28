import { Skeleton } from "@/components/ui/skeleton";
import { GlassCard } from "@/components/ui/GlassCard";

/** Skeleton placeholder shown while lazy sections load. */
export function SectionSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-md space-y-3 text-center">
        <Skeleton className="mx-auto h-6 w-32 rounded-full" />
        <Skeleton className="mx-auto h-10 w-64" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <GlassCard key={i} className="space-y-4 p-6">
            <Skeleton className="h-40 w-full rounded-xl" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
