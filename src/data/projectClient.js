const url = '../data/project.csv';
const async = false;
import '../data/project.csv';

export const getProjects = () => {

  const objects = [];

  const rawFile = new XMLHttpRequest();
  rawFile.open("GET", url, async);
  rawFile.onreadystatechange = function () {

    if (rawFile.readyState !== 4) return;
    if (rawFile.status !== 200 && rawFile.status !== 0) return;

    const records = rawFile.responseText.split(/\r\n|\n/);
    const commaRegex = /(?<!\\),/;
    const headers = records.shift().split(commaRegex);

    records
      .map(line => line.split(commaRegex))
      .map(record => {
        const object = Object.assign({}, ...headers.map(parse(record)));
        objects.push(object);
      });
  };
  rawFile.send();

  return objects;
};

function parse(record) {
  return (header, index) => ({[header]: record[index].replace(/\\/g, '')});
}
