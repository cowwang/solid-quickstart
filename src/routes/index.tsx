import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTpCiSsjQW1yjLvHZzfJ7RnUD_f6RArjMwLEdANWynM-pdjvWJtEMzx-3a_TfC4Obpd9i67z3ly4RB/pubhtml?gid=696319208&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
