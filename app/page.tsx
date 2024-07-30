import { CarCard, CustomFilter, Hero, Searchbar, ShowMore } from "@/Components";
import { fuels, yearsOfProduction } from "@/Constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({searchParams}): Promise<JSX.Element> {
  const allCars = await fetchCars({
    manufacturers:searchParams.manufacturers || '',
    models:searchParams.models || '2022',
    years:searchParams.years || '',
    fuel:searchParams.fuel || '',
    limit:searchParams.limit || '10',
  });
  const isDataEmpty = !Array.isArray(allCars) ||
  allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-semibold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />))}
            </div>

            <ShowMore
            pageNumber={(searchParams.limit ||
              10) /10}
            isNext={(searchParams.limit || 10)>allCars.length} 
            />

            
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              No cars found
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
