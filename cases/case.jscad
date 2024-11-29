function base_extrude_4_6000000000000005_outline_fn(){
    return new CSG.Path2D([[85.5077928,-57.7835822],[91.6985068,-116.6842912]]).appendPoint([166.0642377,-116.6842912]).appendPoint([182.8265399,-120.5541736]).appendPoint([200.6915044,-129.2674989]).appendPoint([209.0205562,-112.190412]).appendPoint([203.0483666,-109.2775805]).appendPoint([203.0483666,-56.6842911]).appendPoint([181.1483666,-56.6842911]).appendPoint([181.1483666,-38.6842912]).appendPoint([145.1483667,-38.6842912]).appendPoint([145.1483667,-35.6842912]).appendPoint([125.1483667,-35.6842912]).appendPoint([125.1483667,-38.6842912]).appendPoint([89.50125,-38.6842912]).appendPoint([89.6668997,-57.3464425]).appendPoint([85.5077928,-57.7835822]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.6985068,-113.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[199.5280893,-101.9976169],"radius":1.1})
).union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[178.1483666,-41.1842912],"radius":1.1})
).union(
    CAG.circle({"center":[92.50125,-44.6842912],"radius":1.1})
)).extrude({ offset: [0, 0, 4.6000000000000005] });
}


function base_extrude_4_5_outline_fn(){
    return new CSG.Path2D([[85.5077928,-57.7835822],[91.6985068,-116.6842912]]).appendPoint([166.0642377,-116.6842912]).appendPoint([182.8265399,-120.5541736]).appendPoint([200.6915044,-129.2674989]).appendPoint([209.0205562,-112.190412]).appendPoint([203.0483666,-109.2775805]).appendPoint([203.0483666,-56.6842911]).appendPoint([181.1483666,-56.6842911]).appendPoint([181.1483666,-38.6842912]).appendPoint([145.1483667,-38.6842912]).appendPoint([145.1483667,-35.6842912]).appendPoint([125.1483667,-35.6842912]).appendPoint([125.1483667,-38.6842912]).appendPoint([89.50125,-38.6842912]).appendPoint([89.6668997,-57.3464425]).appendPoint([85.5077928,-57.7835822]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.6985068,-113.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[199.5280893,-101.9976169],"radius":1.1})
).union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[178.1483666,-41.1842912],"radius":1.1})
).union(
    CAG.circle({"center":[92.50125,-44.6842912],"radius":1.1})
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

        