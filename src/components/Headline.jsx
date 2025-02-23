import PropTypes from "prop-types";
import Semore from "./Semore";

const Headline = ({ child, headline, seemore, extra }) => {
    return (
        <div className="max-w-7xl   relative flex justify-between mt-10 mx-auto">
            <div>
                <div className="flex items-center space-x-2">
                    <div className="theme-color w-4 h-7 rounded"></div>
                    <div className="text-sm font-semibold child-color">{child}</div>
                </div>
                <div className="text-3xl font-semibold mt-2">{headline}</div>
            </div>
            <div className="flex flex-row items-center justify-end text-center  ">
                <div>
                    {extra}
                </div>
                <div className="mt-0">
                    <Semore seemore={seemore} />
                </div>
            </div>
        </div>
    );
};

Headline.propTypes = {
    child: PropTypes.node.isRequired,  
    headline: PropTypes.string.isRequired,  
    seemore: PropTypes.string.isRequired,  
    extra: PropTypes.any  
};

export default Headline;
