import React from 'react';
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBadge } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const DatatablePage = () => {
  function testClickEvent(param) {
    console.log(param);
  }

  const data = () => ({
    columns: [
      {
        label: 'No',
        field: 'numb',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name'
        }
      },
      {
        label: 'Position',
        field: 'position',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'disabled',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        numb: 'GL-0',
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: <span searchvalue={320}> $320</span>,
        clickEvent: () => testClickEvent(1)
      },
      {
        numb: 'GL-1',
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: <span searchvalue={170}> $170</span>
      },
      {
        numb: 'GL-2',
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: <span searchvalue={86}> $86</span>
      },
      {
        numb: 'GL-3',
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: <span searchvalue={433}> $433</span>
      },
      {
        numb: 'GL-4',
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        salary: <span searchvalue={162}> $162</span>
      },
      {
        numb: 'GL-5',
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: '61',
        date: '2012/12/02',
        salary: <span searchvalue={372}> $372</span>
      },
      {
        numb: 'GL-6',
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: '59',
        date: '2012/08/06',
        salary: <span searchvalue={137}> $137</span>
      },
      {
        numb: 'GL-7',
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        salary: <span searchvalue={327}> $327</span>
      },
      {
        numb: 'GL-8',
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: '39',
        date: '2009/09/15',
        salary: <span searchvalue={205}> $205</span>
      },
      {
        numb: 'GL-9',
        name: 'Sonya Frost',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: '23',
        date: '2008/12/13',
        salary: <span searchvalue={103}> $103</span>
      },
      {
        numb: 'GL-10',
        name: 'Jena Gaines',
        position: 'Office Manager',
        office: 'London',
        age: '30',
        date: '2008/12/19',
        salary: <span searchvalue={90}> $90</span>
      },
      {
        numb: 'GL-11',
        name: 'Quinn Flynn',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: '22',
        date: '2013/03/03',
        salary: <span searchvalue={342}> $342</span>
      },
      {
        numb: 'GL-12',
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        age: '36',
        date: '2008/10/16',
        salary: <span searchvalue={470}> $470</span>
      },
      {
        numb: 'GL-13',
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: '43',
        date: '2012/12/18',
        salary: <span searchvalue={313}> $313</span>
      },
      {
        numb: 'GL-14',
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',
        office: 'London',
        age: '19',
        date: '2010/03/17',
        salary: <span searchvalue={385}> $385</span>
      },
      {
        numb: 'GL-15',
        name: 'Michael Silva',
        position: 'Marketing Designer',
        office: 'London',
        age: '66',
        date: '2012/11/27',
        salary: <span searchvalue={198}> $198</span>
      },
      {
        numb: 'GL-16',
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: '64',
        date: '2010/06/09',
        salary: <span searchvalue={725}> $725</span>
      },
      {
        numb: 'GL-17',
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: '59',
        date: '2009/04/10',
        salary: <span searchvalue={237}> $237</span>
      },
      {
        numb: 'GL-18',
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: '41',
        date: '2012/10/13',
        salary: <span searchvalue={132}> $132</span>
      },
      {
        numb: 'GL-19',
        name: 'Dai Rios',
        position: 'Personnel Lead',
        office: 'Edinburgh',
        age: '35',
        date: '2012/09/26',
        salary: <span searchvalue={217}> $217</span>
      },
      {
        numb: 'GL-20',
        name: 'Jenette Caldwell',
        position: 'Development Lead',
        office: 'New York',
        age: '30',
        date: '2011/09/03',
        salary: <span searchvalue={345}> $345</span>
      },
      {
        numb: 'GL-21',
        name: 'Yuri Berry',
        position: 'Chief Marketing Officer (CMO)',
        office: 'New York',
        age: '40',
        date: '2009/06/25',
        salary: <span searchvalue={675}> $675</span>
      },
      {
        numb: 'GL-22',
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        office: 'New York',
        age: '21',
        date: '2011/12/12',
        salary: <span searchvalue={106}> $106</span>
      },
      {
        numb: 'GL-23',
        name: 'Doris Wilder',
        position: 'Sales Assistant',
        office: 'Sidney',
        age: '23',
        date: '2010/09/20',
        salary: <span searchvalue={85}> $85</span>
      },
      {
        numb: 'GL-24',
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        age: '47',
        date: '2009/10/09',
        salary: <span searchvalue={1}> $1</span>
      },
      {
        numb: 'GL-25',
        name: 'Gavin Joyce',
        position: 'Developer',
        office: 'Edinburgh',
        age: '42',
        date: '2010/12/22',
        salary: <span searchvalue={92}> $92</span>
      },
      {
        numb: 'GL-26',
        name: 'Jennifer Chang',
        position: 'Regional Director',
        office: 'Singapore',
        age: '28',
        date: '2010/11/14',
        salary: <span searchvalue={357}> $357</span>
      },
      {
        numb: 'GL-27',
        name: 'Brenden Wagner',
        position: 'Software Engineer',
        office: 'San Francisco',
        age: '28',
        date: '2011/06/07',
        salary: <span searchvalue={206}> $206</span>
      },
      {
        numb: 'GL-28',
        name: 'Fiona Green',
        position: 'Chief Operating Officer (COO)',
        office: 'San Francisco',
        age: '48',
        date: '2010/03/11',
        salary: <span searchvalue={850}> $850</span>
      },
      {
        numb: 'GL-29',
        name: 'Shou Itou',
        position: 'Regional Marketing',
        office: 'Tokyo',
        age: '20',
        date: '2011/08/14',
        salary: <span searchvalue={163}> $163</span>
      },
      {
        numb: 'GL-30',
        name: 'Michelle House',
        position: 'Integration Specialist',
        office: 'Sidney',
        age: '37',
        date: '2011/06/02',
        salary: <span searchvalue={95}> $95</span>
      },
      {
        numb: 'GL-31',
        name: 'Suki Burks',
        position: 'Developer',
        office: 'London',
        age: '53',
        date: '2009/10/22',
        salary: <span searchvalue={114}> $114</span>
      },
      {
        numb: 'GL-32',
        name: 'Prescott Bartlett',
        position: 'Technical Author',
        office: 'London',
        age: '27',
        date: '2011/05/07',
        salary: <span searchvalue={145}> $145</span>
      },
      {
        numb: 'GL-33',
        name: 'Gavin Cortez',
        position: 'Team Leader',
        office: 'San Francisco',
        age: '22',
        date: '2008/10/26',
        salary: <span searchvalue={235}> $235</span>
      },
      {
        numb: 'GL-34',
        name: 'Martena Mccray',
        position: 'Post-Sales support',
        office: 'Edinburgh',
        age: '46',
        date: '2011/03/09',
        salary: <span searchvalue={324}> $324</span>
      },
      {
        numb: 'GL-35',
        name: 'Unity Butler',
        position: 'Marketing Designer',
        office: 'San Francisco',
        age: '47',
        date: '2009/12/09',
        salary: <span searchvalue={85}> $85</span>
      },
      {
        numb: 'GL-36',
        name: 'Howard Hatfield',
        position: 'Office Manager',
        office: 'San Francisco',
        age: '51',
        date: '2008/12/16',
        salary: <span searchvalue={164}> $164</span>
      },
      {
        numb: 'GL-37',
        name: 'Hope Fuentes',
        position: 'Secretary',
        office: 'San Francisco',
        age: '41',
        date: '2010/02/12',
        salary: <span searchvalue={109}> $109</span>
      },
      {
        numb: 'GL-38',
        name: 'Vivian Harrell',
        position: 'Financial Controller',
        office: 'San Francisco',
        age: '62',
        date: '2009/02/14',
        salary: <span searchvalue={452}> $452</span>
      },
      {
        numb: 'GL-39',
        name: 'Timothy Mooney',
        position: 'Office Manager',
        office: 'London',
        age: '37',
        date: '2008/12/11',
        salary: <span searchvalue={136}> $136</span>
      },
      {
        numb: 'GL-40',
        name: 'Jackson Bradshaw',
        position: 'Director',
        office: 'New York',
        age: '65',
        date: '2008/09/26',
        salary: <span searchvalue={645}> $645</span>
      },
      {
        numb: 'GL-41',
        name: 'Olivia Liang',
        position: 'Support Engineer',
        office: 'Singapore',
        age: '64',
        date: '2011/02/03',
        salary: <span searchvalue={234}> $234</span>
      },
      {
        numb: 'GL-42',
        name: 'Bruno Nash',
        position: 'Software Engineer',
        office: 'London',
        age: '38',
        date: '2011/05/03',
        salary: <span searchvalue={163}> $163</span>
      },
      {
        numb: 'GL-43',
        name: 'Sakura Yamamoto',
        position: 'Support Engineer',
        office: 'Tokyo',
        age: '37',
        date: '2009/08/19',
        salary: <span searchvalue={139}> $139</span>
      },
      {
        numb: 'GL-44',
        name: 'Thor Walton',
        position: 'Developer',
        office: 'New York',
        age: '61',
        date: '2013/08/11',
        salary: <span searchvalue={98}> $98</span>
      },
      {
        numb: 'GL-45',
        name: 'Finn Camacho',
        position: 'Support Engineer',
        office: 'San Francisco',
        age: '47',
        date: '2009/07/07',
        salary: <span searchvalue={87}> $87</span>
      },
      {
        numb: 'GL-46',
        name: 'Serge Baldwin',
        position: 'Data Coordinator',
        office: 'Singapore',
        age: '64',
        date: '2012/04/09',
        salary: <span searchvalue={138}> $138</span>
      },
      {
        numb: 'GL-47',
        name: 'Zenaida Frank',
        position: 'Software Engineer',
        office: 'New York',
        age: '63',
        date: '2010/01/04',
        salary: <span searchvalue={125}> $125</span>
      },
      {
        numb: 'GL-48',
        name: 'Zorita Serrano',
        position: 'Software Engineer',
        office: 'San Francisco',
        age: '56',
        date: '2012/06/01',
        salary: <span searchvalue={115}> $115</span>
      },
      {
        numb: 'GL-49',
        name: 'Jennifer Acosta',
        position: 'Junior Javascript Developer',
        office: 'Edinburgh',
        age: '43',
        date: '2013/02/01',
        salary: <span searchvalue={75}> $75</span>
      },
      {
        numb: 'GL-50',
        name: 'Cara Stevens',
        position: 'Sales Assistant',
        office: 'New York',
        age: '46',
        date: '2011/12/06',
        salary: <span searchvalue={145}> $145</span>
      },
      {
        numb: 'GL-51',
        name: 'Hermione Butler',
        position: 'Regional Director',
        office: 'London',
        age: '47',
        date: '2011/03/21',
        salary: <span searchvalue={356}> $356</span>
      },
      {
        numb: 'GL-52',
        name: 'Lael Greer',
        position: 'Systems Administrator',
        office: 'London',
        age: '21',
        date: '2009/02/27',
        salary: <span searchvalue={103}> $103</span>
      },
      {
        numb: 'GL-53',
        name: 'Jonas Alexander',
        position: 'Developer',
        office: 'San Francisco',
        age: '30',
        date: '2010/07/14',
        salary: <span searchvalue={86}> $86</span>
      },
      {
        numb: 'GL-54',
        name: 'Shad Decker',
        position: 'Regional Director',
        office: 'Edinburgh',
        age: '51',
        date: '2008/11/13',
        salary: <span searchvalue={183}> $183</span>
      },
      {
        numb: 'GL-55',
        name: 'Michael Bruce',
        position: 'Javascript Developer',
        office: 'Singapore',
        age: '29',
        date: '2011/06/27',
        salary: <span searchvalue={183}> $183</span>
      },
      {
        numb: 'GL-56',
        name: 'Donna Snider',
        position: 'Customer Support',
        office: 'New York',
        age: '27',
        date: '2011/01/25',
        salary: <span searchvalue={112}> $112</span>
      }
    ]
  });

  const badgesData = {
    columns: [
      {
        label: 'ID',
        field: 'badge'
      },
      ...data().columns
    ],
    rows: [
      ...data().rows.map((row, order) => ({
        ...row,
        badge: (
          <MDBBadge pill color='primary' className='p-1 px-2' key={order} searchvalue={order}>
            ID: {order + 1}
          </MDBBadge>
        )
      }))
    ]
  };

  const widerData = {
    columns: [
      ...data().columns.map(col => {
        col.width = 200;
        return col;
      })
    ],
    rows: [...data().rows]
  };

  return (
    <MDBContainer className='mt-3'>
      <DocsLink title='Datatable' href='https://mdbootstrap.com/docs/react/tables/datatables/' />

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='Basic example'>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable
                  striped
                  bordered
                  hover
                  entriesOptions={[5, 20, 25]}
                  entries={5}
                  pagesAmount={4}
                  data={data()}
                  proSelect
                />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='Basic example' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable
                  striped
                  bordered
                  hover
                  entriesOptions={[5, 20, 25]}
                  entries={5}
                  pagesAmount={4}
                  data={data()}
                  materialSearch
                  initialPage={2}
                />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='Without info' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable striped bordered hover info={false} data={data()} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='Without sorting' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable striped bordered hover sortable={false} data={data()} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='With sorting conponent' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable
                  striped
                  bordered
                  hover
                  entriesOptions={[5, 20, 25]}
                  entries={5}
                  pagesAmount={4}
                  data={badgesData}
                  sortRows={['badge']}
                  materialSearch
                />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='Initial order' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable striped bordered hover order={['age', 'desc']} data={data()} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='Without searching' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable striped bordered hover searching={false} data={data()} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='Bars positioning' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable barReverse striped bordered hover data={data()} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='With scrollY property' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable striped bordered hover scrollY maxHeight='300px' data={data()} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='ScrollY dynamic height' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable striped bordered hover scrollY maxHeight='50vh' data={data()} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='With scrollX property' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable striped bordered hover scrollX data={widerData} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='With scrollX and scrollY properties' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable
                  striped
                  bordered
                  hover
                  scrollX
                  scrollY
                  maxHeight='300xp'
                  data={widerData}
                  materialSearch
                />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className='py-3'>
        <MDBCol md='12'>
          <SectionContainer title='Without pagination' noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable striped bordered hover paging={false} data={data()} materialSearch />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DatatablePage;
