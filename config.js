// Configuration values for DXF files
var dxfText = {
  textBlockSeparator: 'AcDbText',
  beforeValue: '  1',
  afterValue: '100'
};

var fileConfig = {
  filePath: './input_dxf/text3.dxf',
  encoding: 'utf8'
}

module.exports ={
  dxfText,
  fileConfig
}
