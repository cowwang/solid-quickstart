import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>CowLotto</Title>
      <h1>Cowlotto!</h1>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTpCiSsjQW1yjLvHZzfJ7RnUD_f6RArjMwLEdANWynM-pdjvWJtEMzx-3a_TfC4Obpd9i67z3ly4RB/pubhtml?gid=696319208&amp;single=true&amp;widget=true&amp;headers=false" width="800" height="1000"></iframe>
      <br>
      <Counter />
    </main>
  );
}
