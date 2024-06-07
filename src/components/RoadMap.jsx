import RoadMapItem from './RoadMapItem';
import { roadmapData } from './RoadmapData';

const RoadMap = () => {
  return (
    <div className="container">
      <section className="roadmap">
        <h1>Here is our roadmap</h1>

        <div className="roadmap__timeline">
          <div className="roadmap__line"></div>

          {roadmapData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              stage={item.stage}
              details={item.details}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
