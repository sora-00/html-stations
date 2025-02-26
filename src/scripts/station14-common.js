async function getData() {
    const originalData = [
        {id: 1, full_name: '大木 優', first_name: '優', family_name: '大木',affilication: 'TechTrain', is_student: false},
        {id: 2, full_name: '山田 太郎', first_name: '太郎', family_name: '山田',affilication: 'HogeHoge大学', is_student: true}
      ]
      const newData = originalData.map(item => {
        return{
            ...item,
            full_name: item.family_name + " " + item.first_name
        }
      })

      return newData
}

async function main() {
    const results = await getData();
    const elem = document.getElementById("result");
    results.forEach(result => {
        let li = document.createElement('li');
        let text = document.createTextNode(result.full_name);
        li.appendChild(text);
        elem.appendChild(li);
    })
}

main(


)
