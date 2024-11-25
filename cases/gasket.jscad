function switch_plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[85.3375588,-58.5556058],[89.7367747,-100.411349]]).appendPoint([91.1141023,-115.7735897]).appendArc([92.1101072,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([97.6483666,-116.6842912]).appendPoint([97.6483666,-111.6842912]).appendArc([98.1483666,-111.1842912],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([112.1483666,-111.1842912]).appendPoint([112.1483666,-96.6842912]).appendArc([113.1483666,-95.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([143.1483666,-95.6842912]).appendArc([144.1483666,-96.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([144.1483666,-116.6842912]).appendPoint([165.9503019,-116.6842912]).appendArc([166.175253,-116.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([182.7155249,-120.5285438]).appendArc([182.9289449,-120.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7927104,-128.8291278]).appendArc([201.1298756,-128.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.5821851,-113.089206]).appendArc([208.1217622,-111.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([191.9434692,-103.8613602]).appendPoint([191.0446752,-103.4229891]).appendPoint([188.9626786,-102.4710347]).appendPoint([184.1483667,-101.3595632]).appendPoint([184.1483667,-39.6842912]).appendArc([183.1483667,-38.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.8483667,-38.6842912]).appendPoint([172.8483667,-42.1842912]).appendPoint([168.1483667,-42.1842912]).appendPoint([168.1483667,-38.6842912]).appendPoint([145.3983667,-38.6842912]).appendPoint([145.3983667,-36.4342912]).appendArc([144.3983667,-35.4342912],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.8983667,-35.4342912]).appendArc([124.8983667,-36.4342912],{"radius":1,"clockwise":false,"large":false}).appendPoint([124.8983667,-38.6842912]).appendPoint([101.9983667,-38.6842912]).appendPoint([101.9983667,-41.2842912]).appendArc([101.4983667,-41.7842912],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([94.7983667,-41.7842912]).appendArc([94.2983667,-41.2842912],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([94.2983667,-38.6842912]).appendPoint([91.1468671,-38.6842912]).appendArc([90.1468682,-39.6827905],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.1208091,-57.0473576]).appendPoint([86.2275522,-57.4565554]).appendArc([85.3375588,-58.5556058],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[108.4272505,-56.5517492],[122.4080639,-55.8190458]]).appendPoint([121.6753605,-41.8382324]).appendPoint([107.6945471,-42.5709358]).appendPoint([108.4272505,-56.5517492]).close().innerToCAG()
.union(
    new CSG.Path2D([[109.3169618,-73.5284513],[123.2977752,-72.7957479]]).appendPoint([122.5650718,-58.8149345]).appendPoint([108.5842584,-59.5476379]).appendPoint([109.3169618,-73.5284513]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.2066731,-90.5051534],[124.1874865,-89.77245]]).appendPoint([123.4547831,-75.7916366]).appendPoint([109.4739697,-76.52434]).appendPoint([110.2066731,-90.5051534]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.770046,-107.6933525],[107.6933525,-106.229954]]).appendPoint([106.229954,-92.3066475]).appendPoint([92.3066475,-93.770046]).appendPoint([93.770046,-107.6933525]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.2160782,-73.8796081],[104.1393847,-72.4162096]]).appendPoint([102.6759862,-58.4929031]).appendPoint([88.7526797,-59.9563016]).appendPoint([90.2160782,-73.8796081]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.9930621,-90.7864803],[105.9163686,-89.3230818]]).appendPoint([104.4529701,-75.3997753]).appendPoint([90.5296636,-76.8631738]).appendPoint([91.9930621,-90.7864803]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.6866951,-114.7239729],[182.327876,-117.8732876]]).appendPoint([185.4771907,-104.2321067]).appendPoint([171.8360098,-101.082792]).appendPoint([168.6866951,-114.7239729]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.1483666,-114.1842912],[164.1483666,-114.1842912]]).appendPoint([164.1483666,-100.1842912]).appendPoint([150.1483666,-100.1842912]).appendPoint([150.1483666,-114.1842912]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.1483666,-60.1842911],[178.1483666,-60.1842911]]).appendPoint([178.1483666,-46.1842911]).appendPoint([164.1483666,-46.1842911]).appendPoint([164.1483666,-60.1842911]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.1483666,-77.1842911],[178.1483666,-77.1842911]]).appendPoint([178.1483666,-63.1842911]).appendPoint([164.1483666,-63.1842911]).appendPoint([164.1483666,-77.1842911]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.1483666,-94.1842911],[178.1483666,-94.1842911]]).appendPoint([178.1483666,-80.1842911]).appendPoint([164.1483666,-80.1842911]).appendPoint([164.1483666,-94.1842911]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.1483666,-58.1842912],[160.1483666,-58.1842912]]).appendPoint([160.1483666,-44.1842912]).appendPoint([146.1483666,-44.1842912]).appendPoint([146.1483666,-58.1842912]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.1483666,-75.1842912],[160.1483666,-75.1842912]]).appendPoint([160.1483666,-61.1842912]).appendPoint([146.1483666,-61.1842912]).appendPoint([146.1483666,-75.1842912]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.1483666,-92.1842912],[160.1483666,-92.1842912]]).appendPoint([160.1483666,-78.1842912]).appendPoint([146.1483666,-78.1842912]).appendPoint([146.1483666,-92.1842912]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.1483667,-52.1842912],[142.1483667,-52.1842912]]).appendPoint([142.1483667,-38.1842912]).appendPoint([128.1483667,-38.1842912]).appendPoint([128.1483667,-52.1842912]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.1483667,-69.1842912],[142.1483667,-69.1842912]]).appendPoint([142.1483667,-55.1842912]).appendPoint([128.1483667,-55.1842912]).appendPoint([128.1483667,-69.1842912]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.1483667,-86.1842912],[142.1483667,-86.1842912]]).appendPoint([142.1483667,-72.1842912]).appendPoint([128.1483667,-72.1842912]).appendPoint([128.1483667,-86.1842912]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.5079334,-119.5682043],[199.0910501,-125.7054004]]).appendPoint([205.2282462,-113.1222837]).appendPoint([192.6451295,-106.9850876]).appendPoint([186.5079334,-119.5682043]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function gasket_case_fn() {
                    

                // creating part 0 of case gasket
                let gasket__part_0 = switch_plate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let gasket__part_0_bounds = gasket__part_0.getBounds();
                let gasket__part_0_x = gasket__part_0_bounds[0].x + (gasket__part_0_bounds[1].x - gasket__part_0_bounds[0].x) / 2
                let gasket__part_0_y = gasket__part_0_bounds[0].y + (gasket__part_0_bounds[1].y - gasket__part_0_bounds[0].y) / 2
                gasket__part_0 = translate([-gasket__part_0_x, -gasket__part_0_y, 0], gasket__part_0);
                gasket__part_0 = rotate([0,0,0], gasket__part_0);
                gasket__part_0 = translate([gasket__part_0_x, gasket__part_0_y, 0], gasket__part_0);

                gasket__part_0 = translate([0,0,4.4], gasket__part_0);
                let result = gasket__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return gasket_case_fn();
            }

        