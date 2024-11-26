import CategoryImg1 from "../../assets/images/home/category/img1.png";
import CategoryImg2 from "../../assets/images/home/category/img2.png";
import CategoryImg3 from "../../assets/images/home/category/img3.png";
import CategoryImg4 from "../../assets/images/home/category/img4.png";

const categoryItems = [
  { id: 1, title: "Main Dish", des: "(86 dishes)", image: CategoryImg1 },
  { id: 2, title: "Break Fast", des: "(12 break fast)", image: CategoryImg2 },
  { id: 3, title: "Dessert", des: "(40 dessert)", image: CategoryImg3 },
  { id: 4, title: "Browse All", des: "(255 items)", image: CategoryImg4 },
]

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favourites</p>
        <h2 className="title">Popular Categories</h2>
      </div>

      {/* category card */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {
          categoryItems.map((item, index) => {
            return (
              <div key={index} className="shadow-lg rounded-md py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                <div className="flex w-full mx-auto items-center justify-center">
                  <img src={item.image} alt={item.title} className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28" />
                </div>
                <div className="mt-5 space-y-1">
                  <h5>{item.title}</h5>
                  <p>{item.des}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
export default Categories