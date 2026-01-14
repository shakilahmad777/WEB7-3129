import { use } from "react";

export default function SimpleBarCharts({marksPromise}) {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;
  // console.log(marksData);
  return (
    <div>
        {
          marksData.map(studentData => {
            studentData={
              id: studentData.id,
              name: studentData.name,
              chemistry: studentData.marks.chemistriy,
              physics: studentData.marks.physics,
              math: studentData.marks.math
            }
            console.log(studentData)
          })
        }
    </div>
  )
}
