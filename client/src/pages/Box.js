import React from 'react'
import './box.css';
import { Link } from 'react-router-dom';
const Element = ({ name, symbol, marketValue }) => (
    <div className="box">
      <h2>{name}</h2>
      <p>Symbol: {symbol}</p>  
      <p>Market Value: {marketValue}$</p>
    </div>
  );
const Box = () => {
    const data = [
        { name: "Exxon Mobil Corporation", symbol: "XOM", marketValue: 384845.80 },
        { name: "General Electric Company", symbol: "GE", marketValue: 346042.10 },
        { name: "Microsoft Corporation", symbol: "MSFT", marketValue: 299647.60 },
        { name: "BP p.l.c.", symbol: "BP", marketValue: 248469.70 },
        { name: "Citigroup, Inc.", symbol: "C", marketValue: 231977.70 },
        { name: "Procter & Gamble Company (The)", symbol: "PG", marketValue: 194814.00 },
        { name: "Wal-Mart Stores, Inc.", symbol: "WMT", marketValue: 191978.50 },
        { name: "Pfizer, Inc.", symbol: "PFE", marketValue: 189297.40 },
        { name: "HSBC Holdings, plc.", symbol: "HBC", marketValue: 188804.60 },
        { name: "Toyota Motor Corporation", symbol: "TM", marketValue: 187196.40 },
        { name: "JOHNSON & JOHNSON", symbol: "JNJ", marketValue: 179515.80 },
        { name: "Bank of America Corporation", symbol: "BAC", marketValue: 176906.20 },
        { name: "American International Group, Inc.", symbol: "AIG", marketValue: 169908.50 },
        { name: "TotalFinaElf, S.A.", symbol: "TOT", marketValue: 169852.60 },
        { name: "Novartis AG", symbol: "NVS", marketValue: 151092.70 },
        { name: "Altria Group", symbol: "MO", marketValue: 150638.60 },
        { name: "GLAXOSMITHKLINE PLC", symbol: "GSK", marketValue: 149062.80 },
        { name: "Mitsubishi UFJ Financial Group Inc", symbol: "MTU", marketValue: 146421.90 },
        { name: "J.P. Morgan Chase & Co.", symbol: "JPM", marketValue: 138596.30 },
        { name: "ROYAL DUTCH SHELL PLC", symbol: "RDS/A", marketValue: 133773.40 },
        { name: "ChevronTexaco Corporation", symbol: "CVX", marketValue: 133307.10 },
        { name: "Sanofi-Aventis SA", symbol: "SNY", marketValue: 128920.20 },
        { name: "Vodafone AirTouch Public Limited Company", symbol: "VOD", marketValue: 128885.40 },
        { name: "Intel Corporation", symbol: "INTC", marketValue: 128146.40 },
        { name: "International Business Machines Corporation", symbol: "IBM", marketValue: 127641.00 },
        { name: "ENI S.p.A.", symbol: "E", marketValue: 121462.50 },
        { name: "Cisco Systems, Inc.", symbol: "CSCO", marketValue: 114067.10 },
        { name: "Berkshire Hathaway Inc.", symbol: "BRK/A", marketValue: 112846.90 },
        { name: "UBS AG", symbol: "UBS", marketValue: 110546.60 },
        { name: "Wells Fargo Cap IX", symbol: "WFC", marketValue: 104281.10 },
        { name: "AT&T Inc.", symbol: "T", marketValue: 101549.80 },
        { name: "Coca-Cola Company (The)", symbol: "KO", marketValue: 98450.10 },
        { name: "China Mobile (Hong Kong) Ltd.", symbol: "CHL", marketValue: 97501.20 },
        { name: "Pepsico, Inc.", symbol: "PEP", marketValue: 94976.00 },
        { name: "Verizon Communications Inc.", symbol: "VZ", marketValue: 92763.80 },
        { name: "CONOCOPHILLIPS", symbol: "COP", marketValue: 92112.70 },
        { name: "Genentech, Inc.", symbol: "DNA", marketValue: 90603.70 },
        { name: "Amgen Inc.", symbol: "AMGN", marketValue: 89969.60 },
        { name: "Banco Santander Central Hispano, S.A.", symbol: "STD", marketValue: 89248.80 },
        { name: "Hewlett-Packard Company", symbol: "HPQ", marketValue: 87958.60 },
        { name: "Google Inc.", symbol: "GOOG", marketValue: 86317.00 },
        { name: "Home Depot, Inc. (The)", symbol: "HD", marketValue: 86139.80 },
        { name: "Wachovia Corporation", symbol: "WB", marketValue: 85370.30 },
        { name: "Siemens AG", symbol: "SI", marketValue: 81605.60 },
        { name: "Nokia Corporation", symbol: "NOK", marketValue: 81494.80 },
        { name: "UnitedHealth Group Incorporated", symbol: "UNH", marketValue: 81108.30 },
        { name: "Time Warner Inc.", symbol: "TWX", marketValue: 80206.10 },
        { name: "QUALCOMM Incorporated", symbol: "QCOM", marketValue: 78855.30 },
        { name: "ING Group, N.V.", symbol: "ING", marketValue: 78822.70 },
        { name: "NTT Docomo Inc", symbol: "DCM", marketValue: 77676.50 },
    { name: "E.ON AG", symbol: "EON", marketValue: 77504.80 },
    { name: "ASTRAZENECA PLC", symbol: "AZN", marketValue: 76838.50 },
    { name: "Merck & Company, Inc.", symbol: "MRK", marketValue: 75438.80 },
    { name: "Schlumberger N.V.", symbol: "SLB", marketValue: 75079.30 },
    { name: "Telefonica SA", symbol: "TEF", marketValue: 75014.40 },
    { name: "Mobile TeleSystems", symbol: "MBT", marketValue: 74709.90 },
    { name: "Nippon Telegraph and Telephone Corporation", symbol: "NTT", marketValue: 73164.20 },
    { name: "BHP Billiton Limited", symbol: "BHP", marketValue: 70814.20 },
    { name: "CREDIT SUISSE GROUP", symbol: "CSR", marketValue: 70042.90 },
    { name: "Barclays PLC", symbol: "BCS", marketValue: 69336.30 },
    { name: "Dell Inc.", symbol: "DELL", marketValue: 68981.70 },
    { name: "Merrill Lynch & Co., Inc.", symbol: "MER", marketValue: 68778.10 },
    { name: "Banco Bilbao Viscaya Argentaria S.A.", symbol: "BBV", marketValue: 68630.80 },
    { name: "Medtronic, Inc.", symbol: "MDT", marketValue: 68305.80 },
    { name: "Abbott Laboratories", symbol: "ABT", marketValue: 66935.50 },
    { name: "Deutsche Telekom AG", symbol: "DT", marketValue: 66534.40 },
    { name: "American Express Company", symbol: "AXP", marketValue: 65090.50 },
    { name: "Morgan Stanley", symbol: "MS", marketValue: 64994.30 },
    { name: "SAP Aktiengesellschaft Systeme, Anwendungen, Produkt", symbol: "SAP", marketValue: 64993.50 },
    { name: "Sprint Nextel Corporation", symbol: "S", marketValue: 64848.10 },
    { name: "Oracle Corporation", symbol: "ORCL", marketValue: 64758.40 },
    { name: "Eli Lilly and Company", symbol: "LLY", marketValue: 64355.90 },
    { name: "Allianz Aktiengesellschaft", symbol: "AZ", marketValue: 64122.00 },
    { name: "Structured Products Corp.", symbol: "BLS", marketValue: 51670.90 },
    { name: "LLOYDS TSB GROUP PLC", symbol: "LYG", marketValue: 51544.10 },
    { name: "Nissan Motor Co., Ltd.", symbol: "NSANY", marketValue: 50519.00 },
    { name: "Royal Bank Of Canada", symbol: "RY", marketValue: 50481.70 },
    { name: "Lowe's Companies, Inc.", symbol: "LOW", marketValue: 49691.00 },
    { name: "Sony Corporation", symbol: "SNE", marketValue: 48936.40 },
    { name: "Yahoo! Inc.", symbol: "YHOO", marketValue: 48769.10 },
    { name: "Walt Disney Company (The)", symbol: "DIS", marketValue: 48653.60 },
    { name: "Manulife Financial Corp", symbol: "MFC", marketValue: 48275.90 },
    { name: "Target Corporation", symbol: "TGT", marketValue: 48135.30 },
    { name: "Telefonica Moviles S.A.", symbol: "TEM", marketValue: 47852.60 },
    { name: "British American Tobacco Industries, p.l.c.", symbol: "BTI", marketValue: 47662.40 },
    { name: "United Parcel Service, Inc.", symbol: "UPS", marketValue: 47629.80 },
    { name: "WellPoint Health Networks Inc.", symbol: "WLP", marketValue: 47324.20 },
    { name: "Texas Instruments Incorporated", symbol: "TXN", marketValue: 47295.70 },
    { name: "SUEZ ADS", symbol: "SZE", marketValue: 47234.00 },
    { name: "Federal Home Loan Mortgage Corporation", symbol: "FRE", marketValue: 46957.80 },
    { name: "BHP BILLITON PLC", symbol: "BBL", marketValue: 46524.60 },
    { name: "Caterpillar, Inc.", symbol: "CAT", marketValue: 46186.10 },
    { name: "Lehman ABS Corporation", symbol: "BMY", marketValue: 44589.10 },
    { name: "Koninklijke Philips Electronics, N.V.", symbol: "PHG", marketValue: 44312.10 },
    { name: "McDonald's Corporation", symbol: "MCD", marketValue: 44062.60 },
    { name: "Walgreen Company", symbol: "WAG", marketValue: 43803.20 },
    { name: "Diageo plc", symbol: "DEO", marketValue: 43017.90 },
    { name: "Encana Corporation", symbol: "ECA", marketValue: 42826.20 },
    { name: "Brown-Forman Corporation", symbol: "BF", marketValue: 42299.50 },
    { name: "America Movil, S.A. de C.V.", symbol: "AMX", marketValue: 41854.50 },
    { name: "Washington Mutual, Inc.", symbol: "WM", marketValue: 41503.60 },
    { name: "National Australia Bank Limited", symbol: "NAB", marketValue: 41326.70 },
    { name: "Halliburton Company", symbol: "HAL", marketValue: 40832.30 },
    { name: "Dow Chemical Company (The)", symbol: "DOW", marketValue: 40824.70 },
    { name: "Unilever NV", symbol: "UN", marketValue: 40124.60 },
    { name: "BG Group plc", symbol: "BRG", marketValue: 40090.90 },
    { name: "PETROLEO BRASILEIRO SA PETRO", symbol: "PBR/A", marketValue: 39856.30 },
    { name: "Occidental Petroleum Corporation", symbol: "OXY", marketValue: 39295.40 },
    { name: "ALCON INC", symbol: "ACL", marketValue: 39244.30 },
    { name: "Bank of Nova Scotia (The)", symbol: "BNS", marketValue: 38832.10 },
    { name: "Valero Energy Corporation", symbol: "VLO", marketValue: 38623.40 },
    { name: "Cia Vale do Rio Doce", symbol: "RIO", marketValue: 38449.90 },
    { name: "Nomura Holdings Inc ADR", symbol: "NMR", marketValue: 38355.10 },
    { name: "EXELON CORP", symbol: "EXC", marketValue: 38312.10 },
    { name: "Prudential Financial Inc", symbol: "PRU", marketValue: 38046.70 },
    { name: "MetLife, Inc.", symbol: "MET", marketValue: 37985.00 },
    { name: "Toronto Dominion Bank (The)", symbol: "TD", marketValue: 37926.30 },
    { name: "Comcast Corporation", symbol: "CMCSA", marketValue: 37907.90 },
    { name: "Lehman Brothers Fin SA", symbol: "LEH", marketValue: 37627.80 },
    { name: "Telecom Italia S.P.A.", symbol: "TI", marketValue: 37557.70 },
    { name: "Corning Incorporated", symbol: "GLW", marketValue: 37114.60 },
    { name: "Suncor Energy Inc.", symbol: "SU", marketValue: 36617.80 },
    { name: "Vivendi Universal", symbol: "V", marketValue: 36115.40 }
    ];

  return (
           <div className="container">
    {data.map((item, index) => (
        <Link to='/plot' state={item} className='container' >
              <Element key={index} {...item} />
        </Link>
    ))};
  </div>
   
  )
}

export default Box;