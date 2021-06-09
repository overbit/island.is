import CSVStringify from 'csv-stringify'

export const downloadCSV = async (
  name: string,
  header: string[],
  data: Array<Array<string | number>>,
) => {
  const csvData = [header, ...data]

  const filename = `${name}, ${new Date().toISOString().split('T')[0]}.csv`
  CSVStringify(csvData, (err, output) => {
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${output}`)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', filename)
    document.body.appendChild(link)

    link.click()
  })
}

export const downloadXlsx = async (output: string, name: string) => {
  const filename = `${name}.xlsx`
  const encodedUri = encodeURI(
    `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${output}`,
  )
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', filename)
  document.body.appendChild(link)

  link.click()
}
