import Navbar from '../components/Navbar';

export default function Layout(props) {
  return (
    <div className="max-w-[480px] m-auto flex flex-col h-screen">
        <main className="flex-grow overflow-y-auto pb-[70px] bg-gray-300/20">{props.children}</main>
        <Navbar />
    </div>
  )
}

