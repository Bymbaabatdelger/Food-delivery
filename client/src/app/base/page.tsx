"use client"
import { Card, Stack } from "@mui/material";
import Navbar from "../components/static/Navbar";
import Footer from "../components/static/Footer";
import Main from "../components/static/Main";
import Guide from "../components/static/Guide";
import FoodCard from "../components/static/FoodCard"
import CategoryMenu from "../components/static/CategoryMenu"
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';

export default function FoodCrud(){
    return(
       <Stack>
         <Navbar/>
         <Main/>
        <Stack direction="row" justifyContent={"space-around"}>
        <Guide title="Хүргэлтийн төлөв хянах"  desc="Захиалга бэлтгэлийн явцыг хянах" Icon= {ImportContactsOutlinedIcon} />
         <Guide title="Шуурхай хүргэлт"  desc="Захиалга бэлтгэлийн явцыг хянах" Icon={AccessTimeOutlinedIcon}/>
         <Guide title="Эрүүл, баталгаат орц"  desc="Захиалга бэлтгэлийн явцыг хянах" Icon={RamenDiningOutlinedIcon}/>
         <Guide title="Хоолны өргөн сонголт"  desc="Захиалга бэлтгэлийн явцыг хянах" Icon={ImportContactsOutlinedIcon}/>
        </Stack>
        <FoodCard/>
        <CategoryMenu/>
        <Footer/>
       </Stack>
    )
}