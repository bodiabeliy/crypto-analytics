import React, { useState} from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';


const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text style={{fontSize:22}} x={cx} y={cy} dy={8} textAnchor={"middle"} fill={fill} className={'chart_title'}>
                {`${payload.name} ${(percent * 100).toFixed(2)}%`}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

const renderCustomizedLabel = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (innerRadius + 10) * cos;
    const my = cy + (innerRadius + 16.5) * sin;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
       <>
        <text x={mx} y={my} textAnchor={textAnchor} fill={"white"} className={'chart_title--mobile'}>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
       </>
    );
};
function MobileChart ({data, chartColor}){
    const [activeIndex, setActiveIndex] = useState(0)

    const onPieEnter = (_, index) => setActiveIndex(index)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={420} height={420}>
            <Legend className='chart_title-list--mobile' layout="horizontal" verticalAlign="top" align="top" />

                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    label={renderCustomizedLabel}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    fill={chartColor}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
                
            </PieChart>
        </ResponsiveContainer>
    )
}


export default MobileChart;
