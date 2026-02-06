import bannerImage from '../../../public/pngwing1.png'
export default function Banner() {
    return (
        <div className='md:flex md:justify-around p-10'>
            <div className="md:w-2/5 h-auto md:grid md:justify-between">
                <h1 className='text-2xl md:text-4xl font-bold md:tracking-wide leading-[1.5]'>Books to freshen up your bookshelf</h1>
                <div className="grid sm:flex">
                    <button className='btn my-10 md:my-0 bg-[#23BE0A] text-white'>View The List</button>
                </div>
            </div>
            <div className="">
                <img src={bannerImage} alt="" />
            </div>
        </div>
    )
}
