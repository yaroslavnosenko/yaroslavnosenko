export const Education = () => {
  return (
    <section className="grid md:grid-cols-6 gap-6 mb-16">
      <div className="md:col-span-1">
        <h2 className="font-bold opacity-60 sticky top-6">Education</h2>
      </div>
      <div className="md:col-span-4">
        <article className="mb-12">
          <h3 className="font-bold text-lg">Technical University of Košice</h3>
          <p>
            Kosice, Slovakia • <span className="opacity-60">2017 - 2022</span>
          </p>
          <p className="mt-2">
            The Department of Cybernetics and Artificial Intelligence
          </p>
          <ul className="list-disc ml-6 mt-3">
            <li className="mb-2">
              Master of Science •{' '}
              <span className="opacity-60">Business Informatics</span> • Thesis:
              Navigation of a Robotic Swarm Using Edge Computing Resources.
            </li>
            <li className="mb-2">
              Bachelor of Science •{' '}
              <span className="opacity-60">Intelligent Systems</span> • Thesis:
              Design of Cooperative Tasks Performed by Diverse Types of Robots.
            </li>
          </ul>
        </article>
        <article>
          <h3 className="font-bold text-lg">Uzhhorod Classical Gymnasium</h3>
          <p>
            Uzhhorod, Ukraine • <span className="opacity-60">2017</span>
          </p>
        </article>
      </div>
    </section>
  )
}
