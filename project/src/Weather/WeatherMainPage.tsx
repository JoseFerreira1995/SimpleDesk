import {
  Calendar1Icon,
  HomeIcon,
  LocateFixedIcon,
  SatelliteIcon,
  SunriseIcon,
  SunsetIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import { Label } from "../components/ui/label";

export default function WeatherMainPage() {
  const navigate = useNavigate();
  return (
    <>
      {/* Header Section*/}
      <header>
        <HomeIcon className="m-[2%]" onClick={() => navigate("/")}></HomeIcon>
        <div className="flex justify-center mt-[5%]">
          <h1 className="text-blue-600 dark:text-sky-400 text-7xl font-landing font-bold text-center">
            Weather
          </h1>
        </div>
      </header>
      {/* Search form */}
      <section>
        <div className="flex justify-center m-[5%] gap-5 ">
          <form>
            <Input
              className="text-center bg-sky-50 w-150 input-secondary font-landing "
              placeholder="Location/City"
              type="Search"
            ></Input>
          </form>
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="c">C°</ToggleGroupItem>
            <ToggleGroupItem value="c">F°</ToggleGroupItem>
            <ToggleGroupItem value="c">F°</ToggleGroupItem>
          </ToggleGroup>
        </div>
        {/* Weather info panel */}
        <div className="flex justify-center gap-10 m-[5%]">
          <Card className=" bg-sky-50  w-[45%] h-130">
            <CardHeader className="flex gap-2">
              <LocateFixedIcon></LocateFixedIcon>
              <CardTitle>Location</CardTitle>
              <CardDescription>Country</CardDescription>
            </CardHeader>
            <CardContent className="mt-5">
              <CardTitle className="text-7xl">30°</CardTitle>
              <CardDescription>Weather Descritpion</CardDescription>
              <div className="flex gap-2 mt-5">
                <CardDescription>Min Temp</CardDescription>
                <CardDescription>Max Temp</CardDescription>
              </div>
              <div className="mt-8 bg-sky-200 w-[25%] p-4 rounded-md">
                <div className="flex gap-1">
                  <SatelliteIcon></SatelliteIcon>
                  <label>Status label</label>
                </div>
                <label className="m-10">Stats</label>
              </div>
            </CardContent>
            <CardFooter className="gap-3">
              <div className=" flex gap-5 bg-orange-200 w-[50%] p-4 rounded-md">
                <SunriseIcon className="bg-orange-500 rounded-sm"></SunriseIcon>
                <label> Sunrise</label>
              </div>
              <div className=" flex gap-5 bg-fuchsia-200 w-[50%] p-4 rounded-md">
                <SunsetIcon className="bg-fuchsia-500 rounded-sm"></SunsetIcon>
                <label>Sunset</label>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-sky-50 w-[18%]">
            <CardHeader className="flex items-center gap-3">
              <Calendar1Icon className="text-sky-500"></Calendar1Icon>
              <CardTitle className="text-sky-500">5 Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex bg-sky-300  p-4 rounded-md">
                <Label className="text-sm">Weather Description</Label>
                <Label>Temperature</Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
