function base_extrude_4_6000000000000005_outline_fn(){
    return new CSG.Path2D([[86.6068432,-58.6735757],[92.5989109,-115.6842912]]).appendPoint([166.1483666,-115.6842912]).appendPoint([184.0527886,-120.0396531]).appendPoint([200.2310815,-127.9303337]).appendPoint([207.683391,-112.6508349]).appendPoint([202.4483666,-110.0975429]).appendPoint([202.4483666,-57.6842911]).appendPoint([180.1483666,-57.6842911]).appendPoint([180.1483666,-39.6842912]).appendPoint([144.1483666,-39.6842912]).appendPoint([144.1483667,-36.6842912]).appendPoint([126.1483667,-36.6842912]).appendPoint([126.1483667,-39.6842912]).appendPoint([90.3796813,-39.6842912]).appendPoint([90.5826936,-58.255697]).appendPoint([86.6068432,-58.6735757]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[95.5989109,-112.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[199.3983666,-103.6842911],"radius":1.1})
).union(
    CAG.circle({"center":[135.1483667,-90.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[177.1483666,-42.1842912],"radius":1.1})
).union(
    CAG.circle({"center":[93.3796813,-45.6842912],"radius":1.1})
)).extrude({ offset: [0, 0, 4.6000000000000005] });
}


function base_extrude_4_5_outline_fn(){
    return new CSG.Path2D([[86.6068432,-58.6735757],[92.5989109,-115.6842912]]).appendPoint([166.1483666,-115.6842912]).appendPoint([184.0527886,-120.0396531]).appendPoint([200.2310815,-127.9303337]).appendPoint([207.683391,-112.6508349]).appendPoint([202.4483666,-110.0975429]).appendPoint([202.4483666,-57.6842911]).appendPoint([180.1483666,-57.6842911]).appendPoint([180.1483666,-39.6842912]).appendPoint([144.1483666,-39.6842912]).appendPoint([144.1483667,-36.6842912]).appendPoint([126.1483667,-36.6842912]).appendPoint([126.1483667,-39.6842912]).appendPoint([90.3796813,-39.6842912]).appendPoint([90.5826936,-58.255697]).appendPoint([86.6068432,-58.6735757]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[95.5989109,-112.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[199.3983666,-103.6842911],"radius":1.1})
).union(
    CAG.circle({"center":[135.1483667,-90.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[177.1483666,-42.1842912],"radius":1.1})
).union(
    CAG.circle({"center":[93.3796813,-45.6842912],"radius":1.1})
)).extrude({ offset: [0, 0, 4.5] });
}




                function _case_skirt_case_fn() {
                    

                // creating part 0 of case _case_skirt
                let _case_skirt__part_0 = base_extrude_4_6000000000000005_outline_fn();

                // make sure that rotations are relative
                let _case_skirt__part_0_bounds = _case_skirt__part_0.getBounds();
                let _case_skirt__part_0_x = _case_skirt__part_0_bounds[0].x + (_case_skirt__part_0_bounds[1].x - _case_skirt__part_0_bounds[0].x) / 2
                let _case_skirt__part_0_y = _case_skirt__part_0_bounds[0].y + (_case_skirt__part_0_bounds[1].y - _case_skirt__part_0_bounds[0].y) / 2
                _case_skirt__part_0 = translate([-_case_skirt__part_0_x, -_case_skirt__part_0_y, 0], _case_skirt__part_0);
                _case_skirt__part_0 = rotate([0,0,0], _case_skirt__part_0);
                _case_skirt__part_0 = translate([_case_skirt__part_0_x, _case_skirt__part_0_y, 0], _case_skirt__part_0);

                _case_skirt__part_0 = translate([0,0,1], _case_skirt__part_0);
                let result = _case_skirt__part_0;
                
            
                    return result;
                }
            
            

                function _case_upper_case_fn() {
                    

                // creating part 0 of case _case_upper
                let _case_upper__part_0 = base_extrude_4_5_outline_fn();

                // make sure that rotations are relative
                let _case_upper__part_0_bounds = _case_upper__part_0.getBounds();
                let _case_upper__part_0_x = _case_upper__part_0_bounds[0].x + (_case_upper__part_0_bounds[1].x - _case_upper__part_0_bounds[0].x) / 2
                let _case_upper__part_0_y = _case_upper__part_0_bounds[0].y + (_case_upper__part_0_bounds[1].y - _case_upper__part_0_bounds[0].y) / 2
                _case_upper__part_0 = translate([-_case_upper__part_0_x, -_case_upper__part_0_y, 0], _case_upper__part_0);
                _case_upper__part_0 = rotate([0,0,0], _case_upper__part_0);
                _case_upper__part_0 = translate([_case_upper__part_0_x, _case_upper__part_0_y, 0], _case_upper__part_0);

                _case_upper__part_0 = translate([0,0,5.6000000000000005], _case_upper__part_0);
                let result = _case_upper__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _case_skirt_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _case_upper_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        