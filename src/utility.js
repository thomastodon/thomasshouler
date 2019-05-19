export const csvToObjects = (path) => {

  const objects = [];

  const rawFile = new XMLHttpRequest();
  rawFile.open("GET", path, true);
  rawFile.onreadystatechange = function () {

    if (rawFile.readyState !== 4) return;
    if (rawFile.status !== 200 && rawFile.status !== 0) return;

    const records = rawFile.responseText.split(/\r\n|\n/);
    const headers = records.shift().split(',');

    records
      .map(line => line.split(','))
      .map(lineValues => {

        const object = Object.assign({}, ...headers.map((header, index) => ({[header]: lineValues[index]})));
        objects.push(object);
      });
  };
  rawFile.send(null);

  return objects;
};
