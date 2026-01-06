interface CardProps {
  title: string;
}

export default function AppsCard(props: CardProps) {
  return (
    <div className="mt-6 p-4 ">
      <h2 className="font-landing text-center font-bold dark:text-black">
        {props.title}
      </h2>
    </div>
  );
}
