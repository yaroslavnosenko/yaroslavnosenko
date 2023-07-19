export const Awards = () => {
  return (
    <section className="grid md:grid-cols-6 gap-6">
      <div className="md:col-span-1">
        <h2 className="font-bold opacity-60 sticky top-6">Honors & Awards</h2>
      </div>
      <div className="md:col-span-4">
        <article className="mb-12">
          <h3 className="font-bold text-lg">Junction X</h3>
          <p>
            Budapest, Hungary • <span className="opacity-60">Oct 2019</span>
          </p>
        </article>
        <article className="mb-12">
          <h3 className="font-bold text-lg">HackKosice</h3>
          <p>
            Kosice, Slovakia • <span className="opacity-60">Mar 2019</span>
          </p>
        </article>
        <article>
          <h3 className="font-bold text-lg">Programming Olympiad</h3>
          <p>
            Ukraine • <span className="opacity-60">2015 - 2017</span>
          </p>
          <ul className="list-disc ml-6 mt-3">
            <li className="mb-2">
              In 2015 3rd place on City round of the All-Ukrainian Programming
              Olympiad
            </li>
            <li className="mb-2">
              In 2016 1st place on City round of the All-Ukrainian Programming
              Olympiad
            </li>
            <li className="mb-2">
              In 2016 and 2017 participant in Regional round of the
              All-Ukrainian Programming Olympiad
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
