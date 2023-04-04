import { CircularProgress, Paper, Table, TableContainer } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import { airtelData } from "../../components/DataPlansTable/dataPlans";
import Tablebody from "../../components/DataPlansTable/Tablebody";
import Tablehead from "../../components/DataPlansTable/Tablehead";
import Footer from "../../components/footer/Footer";
import { getAirtelList } from "../../Redux/apiCalls";
import { Loading } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { PaginateContainer } from "../Users/agent.styles";
import { Container, Details, P, TableWrapper, Wrapper } from "./airtel.styles";

const Airtel = () => {
  const { airtelList, isFetching } = useSelector((state) => state.datalist);
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(airtelList?.last_page);
  const [currentItems, setCurrentItems] = useState(airtelList?.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState('DG')
  const [server, setServer] = useState(10)

  const itemsPerPage = airtelList?.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      airtelList?.data && airtelList?.data.slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(airtelList?.total / itemsPerPage));
  }, [itemOffset, airtelList, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % airtelList?.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getAirtelList(dispatch, type, server );
    
  }, [dispatch, type, server]);

  // useEffect(() => {
  //   const network = "AIRTEL";
  //   const types = ["CG", "SME", "DG"];
  //   const servers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  //   types.forEach((type) => {
  //     servers.forEach((server) => {
  //       getAirtelList(dispatch, network, type, server);
  //     });
  //   });
  // }, [dispatch]);

  console.log(airtelList);
  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Data Plans</H3>
          <DescP>
            Services / <DescSpan>Data Plans</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          <P>Data Plans</P>
          <Details>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <Tablehead
                  id="id"
                  network="Network"
                  product="Product Name"
                  price="Provider Price"
                  yourPrice="Your Price"
                  server="Server"
                  status="Status"
                  date="Date Modified"
                  action="Action"
                />
                {airtelList.data && airtelList.data.map((row) => (
                  <Tablebody
                    key={row.id}
                    id={row.id}
                    network={row.network}
                    name={row.name}
                    price={row.price}
                    yourprice={row.amount}
                    server={row.server}
                    action={row.action}
                    status={row.status}
                    date={row.updated_at}
                  />
                ))}
              </Table>
            </TableContainer>
          </Details>
          <PaginateContainer
            // marginPagesDisplayed={2}
            page={currentPage}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={8}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageLinkClassName="pageNum"
            previousLinkClassName="pageNum"
            nextLinkClassName="pageNum"
          />
        </TableWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Airtel;
