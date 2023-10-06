import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex">
       <button className="btn btn-secondary">Secondary</button>
       <p className="text-xl font-semibold">
       <Marquee pauseOnHover={true} speed={100}>
      <Link className="mr-20"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
      <Link> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
       </p>
        </div>
    );
};

export default BreakingNews;
