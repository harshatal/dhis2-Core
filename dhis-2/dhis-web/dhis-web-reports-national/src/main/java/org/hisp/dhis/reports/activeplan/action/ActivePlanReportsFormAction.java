package org.hisp.dhis.reports.activeplan.action;

import com.opensymphony.xwork2.Action;

public class ActivePlanReportsFormAction
    implements Action
{

    // -------------------------------------------------------------------------
    // Dependencies
    // -------------------------------------------------------------------------
    /*
    private ReportService reportService;

    public void setReportService( ReportService reportService )
    {
        this.reportService = reportService;
    }

    private PeriodService periodService;

    public void setPeriodService( PeriodService periodService )
    {
        this.periodService = periodService;
    }
    */
    
    // -------------------------------------------------------------------------
    // Getter & Setter
    // -------------------------------------------------------------------------
    /*
    private List<Report> reportList;

    public List<Report> getReportList()
    {
        return reportList;
    }

    private List<Period> periodList;

    public List<Period> getPeriodList()
    {
        return periodList;
    }

    private SimpleDateFormat simpleDateFormat;

    public SimpleDateFormat getSimpleDateFormat()
    {
        return simpleDateFormat;
    }

    private String raFolderName;
    */
    
    // -------------------------------------------------------------------------
    // Action implementation
    // -------------------------------------------------------------------------

    public String execute()
        throws Exception
    {
 /*       raFolderName = reportService.getRAFolderName();

        periodList = new ArrayList<Period>( periodService.getPeriodsByPeriodType( new MonthlyPeriodType() ) );

        reportList = new ArrayList<Report>();

        simpleDateFormat = new SimpleDateFormat( "MMM-yyyy" );

        System.out.println( "periodList.size " + periodList.size() );

        getSelectedReportList();*/

        return SUCCESS;
    }

   /* public void getSelectedReportList()*/
    {
        /*String fileName = "NBITSactivePlanFeedBackReportsList.xml";
        String path = System.getProperty( "user.home" ) + File.separator + "dhis" + File.separator + raFolderName
            + File.separator + fileName;
        try
        {
            String newpath = System.getenv( "DHIS2_HOME" );
            if ( newpath != null )
            {
                path = newpath + File.separator + raFolderName + File.separator + fileName;
            }
        }
        catch ( NullPointerException npe )
        {
            // do nothing, but we might be using this somewhere without
            // DHIS2_HOME set, which will throw a NPE
        }

        String reportId = "";
        String reportName = "";
        String reportType = "";
        Integer reportProgramId = 0;
        String reportModel = "";
        String reportFileName = "";

        try
        {
            DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();
            Document doc = docBuilder.parse( new File( path ) );
            if ( doc == null )
            {
                System.out.println( "XML File Not Found at user home" );
                return;
            }

            NodeList listOfReports = doc.getElementsByTagName( "report" );
            int totalReports = listOfReports.getLength();
            for ( int s = 0; s < totalReports; s++ )
            {
                Node reportNode = listOfReports.item( s );
                if ( reportNode.getNodeType() == Node.ELEMENT_NODE )
                {
                    Element reportElement = (Element) reportNode;
                    reportId = reportElement.getAttribute( "id" );

                    NodeList reportNameList = reportElement.getElementsByTagName( "name" );
                    Element reportNameElement = (Element) reportNameList.item( 0 );
                    NodeList textreportNameList = reportNameElement.getChildNodes();
                    reportName = ((Node) textreportNameList.item( 0 )).getNodeValue().trim();

                    NodeList reportTypeList = reportElement.getElementsByTagName( "type" );
                    Element reportTypeElement = (Element) reportTypeList.item( 0 );
                    NodeList textreportTypeList = reportTypeElement.getChildNodes();
                    reportType = ((Node) textreportTypeList.item( 0 )).getNodeValue().trim();

                    NodeList reportModelList = reportElement.getElementsByTagName( "model" );
                    Element reportModelElement = (Element) reportModelList.item( 0 );
                    NodeList textreportModelList = reportModelElement.getChildNodes();
                    reportModel = ((Node) textreportModelList.item( 0 )).getNodeValue().trim();

                    NodeList reportFileNameList = reportElement.getElementsByTagName( "filename" );
                    Element reportFileNameElement = (Element) reportFileNameList.item( 0 );
                    NodeList textreportFileNameList = reportFileNameElement.getChildNodes();
                    reportFileName = ((Node) textreportFileNameList.item( 0 )).getNodeValue().trim();

                    NodeList reportLevelList = reportElement.getElementsByTagName( "program" );
                    Element reportLevelElement = (Element) reportLevelList.item( 0 );
                    NodeList textreportLevelList = reportLevelElement.getChildNodes();
                    reportProgramId = Integer.parseInt( ((Node) textreportLevelList.item( 0 )).getNodeValue().trim() );

                   Report reportObj = new Report( reportId, reportName, reportType, reportModel, reportFileName,reportProgramId );
                   reportList.add( reportObj );

                }
            }// end of for loop with s var
        }// try block end
        catch ( SAXParseException err )
        {
            System.out.println( "** Parsing error" + ", line " + err.getLineNumber() + ", uri " + err.getSystemId() );
            System.out.println( " " + err.getMessage() );
        }
        catch ( SAXException e )
        {
            Exception x = e.getException();
            ((x == null) ? e : x).printStackTrace();
        }
        catch ( Throwable t )
        {
            t.printStackTrace();
        }*/

    }// getReportList end

}
