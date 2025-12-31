interface CardProps {
  title: string;
}

export default function AppsCard(props: CardProps) {
  return (
    <div className="mt-[20%] p-[10%] ">
      <h2 className="font-landing text-center dark:text-black">{props.title}</h2>
    </div>
  );
}
