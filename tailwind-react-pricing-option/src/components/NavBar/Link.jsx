
export default function Link({route}) {
  return (
    <div>
        <li className="hover:bg-amber-500 px-3.5 py-1.5 md:rounded">
            <a className="p-2.5" href={route.path}>{route.name}</a>
        </li>
    </div>
  )
}
