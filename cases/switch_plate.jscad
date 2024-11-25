function switch_plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-14.6624412,41.4443942],[-10.2632253,-0.411349]]).appendPoint([-8.8858977,-15.7735897]).appendArc([-7.8898928,-16.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([-2.3516334,-16.6842912]).appendPoint([-2.3516334,-11.6842912]).appendArc([-1.8516334,-11.1842912],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([12.1483666,-11.1842912]).appendPoint([12.1483666,3.3157088]).appendArc([13.1483666,4.3157088],{"radius":1,"clockwise":true,"large":false}).appendPoint([43.1483666,4.3157088]).appendArc([44.1483666,3.3157088],{"radius":1,"clockwise":true,"large":false}).appendPoint([44.1483666,-16.6842912]).appendPoint([65.9503019,-16.6842912]).appendArc([66.175253,-16.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([82.7155249,-20.5285438]).appendArc([82.9289449,-20.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([99.7927104,-28.8291278]).appendArc([101.1298756,-28.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([108.5821851,-13.089206]).appendArc([108.1217622,-11.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.9434692,-3.8613602]).appendPoint([91.0446752,-3.4229891]).appendPoint([88.9626786,-2.4710347]).appendPoint([84.1483667,-1.3595632]).appendPoint([84.1483667,60.3157088]).appendArc([83.1483667,61.3157088],{"radius":1,"clockwise":false,"large":false}).appendPoint([72.8483667,61.3157088]).appendPoint([72.8483667,57.8157088]).appendPoint([68.1483667,57.8157088]).appendPoint([68.1483667,61.3157088]).appendPoint([45.3983667,61.3157088]).appendPoint([45.3983667,63.5657088]).appendArc([44.3983667,64.5657088],{"radius":1,"clockwise":false,"large":false}).appendPoint([25.8983667,64.5657088]).appendArc([24.8983667,63.5657088],{"radius":1,"clockwise":false,"large":false}).appendPoint([24.8983667,61.3157088]).appendPoint([1.9983667,61.3157088]).appendPoint([1.9983667,58.7157088]).appendArc([1.4983667,58.2157088],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([-5.2016333,58.2157088]).appendArc([-5.7016333,58.7157088],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([-5.7016333,61.3157088]).appendPoint([-8.8531329,61.3157088]).appendArc([-9.8531318,60.3172095],{"radius":1,"clockwise":false,"large":false}).appendPoint([-9.8791909,42.9526424]).appendPoint([-13.7724478,42.5434446]).appendArc([-14.6624412,41.4443942],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[-2.4519145,52.0287239],"radius":1.8})
.union(
    new CSG.Path2D([[10.2066731,9.4948466],[24.1874865,10.22755]]).appendPoint([23.4547831,24.2083634]).appendPoint([9.4739697,23.47566]).appendPoint([10.2066731,9.4948466]).close().innerToCAG()
).union(
    new CSG.Path2D([[9.3169618,26.4715487],[23.2977752,27.2042521]]).appendPoint([22.5650718,41.1850655]).appendPoint([8.5842584,40.4523621]).appendPoint([9.3169618,26.4715487]).close().innerToCAG()
).union(
    new CSG.Path2D([[8.4272505,43.4482508],[22.4080639,44.1809542]]).appendPoint([21.6753605,58.1617676]).appendPoint([7.6945471,57.4290642]).appendPoint([8.4272505,43.4482508]).close().innerToCAG()
).union(
    new CSG.Path2D([[-9.7839218,26.1203919],[4.1393847,27.5837904]]).appendPoint([2.6759862,41.5070969]).appendPoint([-11.2473203,40.0436984]).appendPoint([-9.7839218,26.1203919]).close().innerToCAG()
).union(
    new CSG.Path2D([[-8.0069379,9.2135197],[5.9163686,10.6769182]]).appendPoint([4.4529701,24.6002247]).appendPoint([-9.4703364,23.1368262]).appendPoint([-8.0069379,9.2135197]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.229954,-7.6933525],[7.6933525,-6.229954]]).appendPoint([6.229954,7.6933525]).appendPoint([-7.6933525,6.229954]).appendPoint([-6.229954,-7.6933525]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.6866951,-14.7239729],[82.327876,-17.8732876]]).appendPoint([85.4771907,-4.2321067]).appendPoint([71.8360098,-1.082792]).appendPoint([68.6866951,-14.7239729]).close().innerToCAG()
).union(
    new CSG.Path2D([[64.1483666,39.8157089],[78.1483666,39.8157089]]).appendPoint([78.1483666,53.8157089]).appendPoint([64.1483666,53.8157089]).appendPoint([64.1483666,39.8157089]).close().innerToCAG()
).union(
    new CSG.Path2D([[64.1483666,22.8157089],[78.1483666,22.8157089]]).appendPoint([78.1483666,36.8157089]).appendPoint([64.1483666,36.8157089]).appendPoint([64.1483666,22.8157089]).close().innerToCAG()
).union(
    new CSG.Path2D([[64.1483666,5.8157089],[78.1483666,5.8157089]]).appendPoint([78.1483666,19.8157089]).appendPoint([64.1483666,19.8157089]).appendPoint([64.1483666,5.8157089]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.1483666,41.8157088],[60.1483666,41.8157088]]).appendPoint([60.1483666,55.8157088]).appendPoint([46.1483666,55.8157088]).appendPoint([46.1483666,41.8157088]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.1483666,24.8157088],[60.1483666,24.8157088]]).appendPoint([60.1483666,38.8157088]).appendPoint([46.1483666,38.8157088]).appendPoint([46.1483666,24.8157088]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.1483666,7.8157088],[60.1483666,7.8157088]]).appendPoint([60.1483666,21.8157088]).appendPoint([46.1483666,21.8157088]).appendPoint([46.1483666,7.8157088]).close().innerToCAG()
).union(
    new CSG.Path2D([[28.1483667,47.8157088],[42.1483667,47.8157088]]).appendPoint([42.1483667,61.8157088]).appendPoint([28.1483667,61.8157088]).appendPoint([28.1483667,47.8157088]).close().innerToCAG()
).union(
    new CSG.Path2D([[28.1483667,30.8157088],[42.1483667,30.8157088]]).appendPoint([42.1483667,44.8157088]).appendPoint([28.1483667,44.8157088]).appendPoint([28.1483667,30.8157088]).close().innerToCAG()
).union(
    new CSG.Path2D([[28.1483667,13.8157088],[42.1483667,13.8157088]]).appendPoint([42.1483667,27.8157088]).appendPoint([28.1483667,27.8157088]).appendPoint([28.1483667,13.8157088]).close().innerToCAG()
).union(
    new CSG.Path2D([[50.1483666,-14.1842912],[64.1483666,-14.1842912]]).appendPoint([64.1483666,-0.1842912]).appendPoint([50.1483666,-0.1842912]).appendPoint([50.1483666,-14.1842912]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.5079334,-19.5682043],[99.0910501,-25.7054004]]).appendPoint([105.2282462,-13.1222837]).appendPoint([92.6451295,-6.9850876]).appendPoint([86.5079334,-19.5682043]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function switch_plate_case_fn() {
                    

                // creating part 0 of case switch_plate
                let switch_plate__part_0 = switch_plate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let switch_plate__part_0_bounds = switch_plate__part_0.getBounds();
                let switch_plate__part_0_x = switch_plate__part_0_bounds[0].x + (switch_plate__part_0_bounds[1].x - switch_plate__part_0_bounds[0].x) / 2
                let switch_plate__part_0_y = switch_plate__part_0_bounds[0].y + (switch_plate__part_0_bounds[1].y - switch_plate__part_0_bounds[0].y) / 2
                switch_plate__part_0 = translate([-switch_plate__part_0_x, -switch_plate__part_0_y, 0], switch_plate__part_0);
                switch_plate__part_0 = rotate([0,0,0], switch_plate__part_0);
                switch_plate__part_0 = translate([switch_plate__part_0_x, switch_plate__part_0_y, 0], switch_plate__part_0);

                switch_plate__part_0 = translate([0,0,5.4], switch_plate__part_0);
                let result = switch_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switch_plate_case_fn();
            }

        