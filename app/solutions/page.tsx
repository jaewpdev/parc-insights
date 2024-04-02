import GridBackground from "../../public/grid-fade-background.svg";
import StrategyVector from "../../public/strategy-vector.svg";


export default function Solutions() {
  return (
    <div className="flex flex-col items-center pt-[10vh] mb-20">
      <GridBackground className="absolute top-0 -z-20" />
      <h1 className="text-5xl sm:text-6xl text-center font-medium tracking-tighter leading-tight mb-4">
        Let&apos;s drive success together
      </h1>
      <p className="text-xl font-light mb-8 text-gray-500 text-center">
        Imagine having a bit more time and a lot more customers. That&apos;s
        what we do best. Let&apos;s chat about making your life easier and your
        business busier.
      </p>

      <div className="flex">
          <StrategyVector className="max-w-[400px] w-[50vw]" />
      </div>
    </div>
  );
}
