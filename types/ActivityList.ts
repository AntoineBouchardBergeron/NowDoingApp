import { Activity, Status } from "../Classes/Activity";
import { Time } from "../Classes/Time";
import { DesiredTimeRepresentation } from "../Classes/DesiredTimeRepresentation";

const Activity1 = new Activity(
  1,
  "Line Intersection",
  Status.Active,
  "1- Figure out the best way to add points with the contour.(is it with pattern or layer Gen?)\n2- Add the points of contour that intersects with pattern points to the list.\n3- While adding the intesected points, account for the contour segment direction and skip the addition of line intersected",
  new Time(1800),
  0,
  new Time(0),
  new DesiredTimeRepresentation(1)
);

export { Activity1 };
