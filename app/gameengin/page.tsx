import { redirect } from 'next/navigation';




export default function GameEnginIndexPage(): never {
  redirect('/gameengin/cartridges?openEngin=1');
}
