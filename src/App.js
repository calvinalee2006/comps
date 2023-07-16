import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "hello1",
      label: "Can I reuse React on a project",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "hello2",
      label: "Can I reuse JavaScript on a project",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "hello3",
      label: "Can I reuse CSS on a project",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
