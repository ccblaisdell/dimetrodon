function base_extrude_4_6000000000000005_outline_fn(){
    return new CSG.Path2D([[-14.6624412,41.4443942],[-10.2632253,-0.411349]]).appendPoint([-8.8858977,-15.7735897]).appendArc([-7.8898928,-16.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([65.9503019,-16.6842912]).appendArc([66.175253,-16.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([82.7155249,-20.5285438]).appendArc([82.9289449,-20.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([99.7927104,-28.8291278]).appendArc([101.1298756,-28.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([108.5821851,-13.089206]).appendArc([108.1217622,-11.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([102.9483666,-9.2288073]).appendPoint([102.9483666,42.3157089]).appendArc([102.4483666,42.8157089],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([84.1483667,42.8157089]).appendPoint([84.1483667,60.3157088]).appendArc([83.1483667,61.3157088],{"radius":1,"clockwise":false,"large":false}).appendPoint([45.3983667,61.3157088]).appendPoint([45.3983667,63.5657088]).appendArc([44.3983667,64.5657088],{"radius":1,"clockwise":false,"large":false}).appendPoint([25.8983667,64.5657088]).appendArc([24.8983667,63.5657088],{"radius":1,"clockwise":false,"large":false}).appendPoint([24.8983667,61.3157088]).appendPoint([-8.8531329,61.3157088]).appendArc([-9.8531318,60.3172095],{"radius":1,"clockwise":false,"large":false}).appendPoint([-9.8791909,42.9526424]).appendPoint([-13.7724478,42.5434446]).appendArc([-14.6624412,41.4443942],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4.6000000000000005] });
}


function base_extrude_4_5_outline_fn(){
    return new CSG.Path2D([[-14.6624412,41.4443942],[-10.2632253,-0.411349]]).appendPoint([-8.8858977,-15.7735897]).appendArc([-7.8898928,-16.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([65.9503019,-16.6842912]).appendArc([66.175253,-16.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([82.7155249,-20.5285438]).appendArc([82.9289449,-20.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([99.7927104,-28.8291278]).appendArc([101.1298756,-28.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([108.5821851,-13.089206]).appendArc([108.1217622,-11.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([102.9483666,-9.2288073]).appendPoint([102.9483666,42.3157089]).appendArc([102.4483666,42.8157089],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([84.1483667,42.8157089]).appendPoint([84.1483667,60.3157088]).appendArc([83.1483667,61.3157088],{"radius":1,"clockwise":false,"large":false}).appendPoint([45.3983667,61.3157088]).appendPoint([45.3983667,63.5657088]).appendArc([44.3983667,64.5657088],{"radius":1,"clockwise":false,"large":false}).appendPoint([25.8983667,64.5657088]).appendArc([24.8983667,63.5657088],{"radius":1,"clockwise":false,"large":false}).appendPoint([24.8983667,61.3157088]).appendPoint([-8.8531329,61.3157088]).appendArc([-9.8531318,60.3172095],{"radius":1,"clockwise":false,"large":false}).appendPoint([-9.8791909,42.9526424]).appendPoint([-13.7724478,42.5434446]).appendArc([-14.6624412,41.4443942],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4.5] });
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

        