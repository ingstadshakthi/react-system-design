


export default function SplitScreen({ children, leftWidth, rightWidth }) {
    const [left, right] = children;
    console.log(left, right)
    const classOne = `flex-${leftWidth} bg-red-200`
    const classTwo = `flex-${rightWidth} bg-green-500`
    return (
        <div className='flex w-screen'>
            <div className={classOne}>{left}</div>
            <div className={classTwo}>{right}</div>
        </div>
    )
}
