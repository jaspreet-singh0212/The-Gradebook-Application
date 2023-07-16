import Plot from 'react-plotly.js';
import students from '../studentgrade';

const Stats=()=>{
    const layout = {
    title: 'Grade Distribution',
    height: 430,
    width: 380
  };

    let p=0;
    let f=0;
    let all=0;
    let grade;
    let a=0,b=0,c=0,d=0,e=0;
    let avg=0;
    let max=-1,min=11;
    for(let x in students){
        all=all+1;
        grade=parseFloat(((0.6*students[x].exam)+(0.4*students[x].rating)).toFixed(2));
       grade>=4?p=p+1:f=f+1;
       if(grade>=0&&grade<2){a+=1};
       if(grade>=2&&grade<4){b+=1};
       if(grade>=4&&grade<6){c+=1};
       if(grade>=6&&grade<8){d+=1};
       if(grade>=8&&grade<10){e+=1};
       if(grade>max){max=grade};
       if(grade<min){min=grade};
       
    }
    avg=(a+b+c+d+e)/5;
   
    const data = [
      {
        values: [a,b,c,d,e],
        labels: ['0-2','2-4', '4-6', '6-8','8-10'],
        type: 'pie',
        hole: 0.5,
        marker: {
          colors: ['#ffa600', '#003f5c','#bc5090','#ff6361','#58508d']
        }
      }
    ];
  
      return(
        <>
        <style>{`#stats{border: 2px solid #eee;margin:10px; border-collapse: collapse;background-color: white;padding: 10px;}
                #tab{display: flex;margin: 50px; background-color: white;box-shadow: 5px 10px 18px #56b5ba;justify-items: center;
                align-items: center;}`}</style>
      <div id="tab">
      <table id="stats">
      <thead id="stats">
        <tr id="stats">
          <th id="stats">Details</th>
          <th id="stats">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr id="stats">
          <td id="stats">Total Students</td>
          <td id="stats">{all}</td>
        </tr>

        <tr id="stats">
          <td id="stats">Passed Students</td>
          <td id="stats">{p}</td>
        </tr>

        <tr id="stats">
          <td id="stats">Failed Students</td>
          <td id="stats">{f}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Maximum Grade</td>
          <td id="stats">{max}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Average Grade</td>
          <td id="stats">{avg}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Minimum Grade</td>
          <td id="stats">{min}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Grades(4-6)</td>
          <td id="stats">{c}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Grades(6-8)</td>
          <td id="stats">{d}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Grades(8-10)</td>
          <td id="stats">{e}</td>
        </tr>
      </tbody>
    </table>
      <Plot
        data={[
          {
            x: ["All","Passed","Failed"],
            y: [all,p,f],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
            name: 'Scatter Plot',
          },
          {
            type: 'bar',
            x: ["All","Passed","Failed"],
            y: [all,p,f],
            name: 'Bar Chart',
            marker: {color:['#6aaa96','#346888','#e67f83']},
          },
        ]}
        layout={{
          width: 380,
          height: 430,
          title: 'Student Details',
         
        }}
      />
      <Plot
      data={data}
      layout={layout}
      />
     <Plot
        data={[
          {
            type: 'bar',
            x: ["Maximum","Average","Minimum"],
            y: [max,avg,min],
            name: 'Bar Chart',
            marker: {color:['#003a5c','#bc5090','#ffa600']},
          }
        ]}
        layout={{
          width: 380,
          height: 430,
          title: 'Student Grades',
         
        }}
      />
  </div>
      </>
      )
  
  
}
export default Stats;