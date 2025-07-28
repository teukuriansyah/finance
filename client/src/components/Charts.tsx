import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Charts = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: props.labels,
        datasets: [{
          label: '# of Expense',
          data: props.expense,
          borderWidth: 1
        },{
          label: '# of Revenue',
          data: props.revenue,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => chart.destroy(); 
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Charts;