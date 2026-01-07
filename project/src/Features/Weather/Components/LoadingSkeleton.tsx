import { Skeleton } from "../../../components/ui/skeleton";


export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen">
      <header className="mt-[5%] text-center">
        <Skeleton className="h-16 w-64 mx-auto rounded-lg" />
      </header>

      <div className="flex justify-center mt-[5%]">
        <Skeleton className="h-12 w-[300px] rounded-md" />
      </div>

      <div className="flex justify-center gap-10 m-[5%]">
        <div className="bg-sky-50 w-[45%] rounded-2xl p-6 space-y-6 shadow-lg">
          <div className="space-y-2">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-20" />
          </div>

          <div className="space-y-3 text-center">
            <Skeleton className="h-20 w-32 mx-auto" />
            <Skeleton className="h-4 w-40 mx-auto" />
          </div>

          <div className="grid grid-cols-2 gap-4"></div>

          <div className="flex gap-4">
            <Skeleton className="h-20 w-1/2 rounded-xl" />
            <Skeleton className="h-20 w-1/2 rounded-xl" />
          </div>
        </div>

        <div className="bg-sky-50 w-[18%] rounded-xl p-4 space-y-4 shadow-sm">
          <Skeleton className="h-6 w-32 mx-auto" />
        </div>
      </div>
    </div>
  );
}
