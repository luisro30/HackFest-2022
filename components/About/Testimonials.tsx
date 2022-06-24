import React, { useState, useEffect, ReactElement } from "react";
import Clsx from "clsx";

type Person = {
  img: string;
  name: string;
  skill: string;
};
type User = {
  person: Person;
  quote: string;
  content: string;
};

function Avatar({ img, name, skill }: Person) {
  return (
    <>
      <div
        className={Clsx(
          "rounded-full border-2 overflow-hidden",
          "inline-block w-10 h-10"
        )}
        style={{
          borderColor: "var(--card-border)",
        }}
      >
        <img className="w-full h-full" src={img} alt={`${name}`} />
      </div>
      <div className="flex flex-col justify-center">
        <h2>{name}</h2>
        <p className="opacity-50 text-xs">{skill}</p>
      </div>
    </>
  );
}

function Card({ children }: { children: ReactElement }) {
  return (
    <article
      className={Clsx(
        "h-full px-8 py-10 relative",
        "shadow-offset rounded-2xl",
        "transform transition duration-500 hover:scale-105 cursor-pointer"
      )}
      style={{
        backgroundColor: "var(--card-background)",
      }}
    >
      {children}
    </article>
  );
}

function Testimonials() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json() as Promise<User[]>)
      .then(setUsers);
  }, [setUsers]);

  return (
    <section className="min-h-screen max-w-screen-xl flex flex-col justify-center mx-auto px-6 py-16">
      <ul
        className="flex flex-col lg:grid gap-6 card-group"
        style={{
          gridTemplateAreas: `
                        "A A B E"
                        "C D D E"
                    `,
        }}
      >
        {users.map((user, index) => (
          <li
            key={user.person.name}
            className="w-full"
            style={{
              gridArea: `${String.fromCodePoint(65 + index)}`,
            }}
          >
            <Card>
              <>
                <div className="space-y-4 z-20">
                  <header className="flex items-center space-x-4">
                    <Avatar {...user.person} />
                  </header>
                  <h3 className="text-xl leading-6">{user.quote}</h3>
                  <p className="opacity-70">{user.content}</p>
                </div>
                {index === 0 && (
                  <img
                    className="z-10 absolute top-0 right-8 lg:right-20"
                    src="/images/bg-pattern-quotation.svg"
                    alt="background quotation"
                  />
                )}
              </>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
