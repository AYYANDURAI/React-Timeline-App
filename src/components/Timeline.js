import React from 'react';
import data from '../data';
import Timelineitem from './TimelineItem';

const Timeline = () => data.length > 0 && (
    <div className="timeline-container">
        {
            data.map((data, index) => (
                <Timelineitem data={data} index={index} key={index} />
            ))
        }
    </div>
)

export default Timeline;