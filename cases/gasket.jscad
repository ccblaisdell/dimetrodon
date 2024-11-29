function switch_plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[85.5077928,-57.7835822],[91.6985068,-116.6842912]]).appendPoint([97.3485068,-116.6842912]).appendPoint([97.3485068,-109.7842912]).appendArc([97.8485068,-109.2842912],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([110.1985068,-109.2842912]).appendArc([110.6985068,-109.7842912],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([110.6985068,-116.6842912]).appendPoint([112.6483666,-116.6842912]).appendPoint([112.6483666,-96.6842912]).appendArc([113.6483666,-95.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([143.6483666,-95.6842912]).appendArc([144.6483666,-96.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([144.6483666,-116.6842912]).appendPoint([166.0642377,-116.6842912]).appendPoint([182.8265399,-120.5541736]).appendPoint([200.6915044,-129.2674989]).appendPoint([209.0205562,-112.190412]).appendPoint([191.0446752,-103.4229891]).appendPoint([188.9626786,-102.4710347]).appendPoint([181.1483666,-100.6669586]).appendPoint([181.1483666,-38.6842912]).appendPoint([175.4983666,-38.6842912]).appendPoint([175.4983666,-41.6842912]).appendArc([174.4983666,-42.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([169.7983666,-42.6842912]).appendArc([168.7983666,-41.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([168.7983666,-38.6842912]).appendPoint([145.1483667,-38.6842912]).appendPoint([145.1483667,-35.6842912]).appendPoint([125.1483667,-35.6842912]).appendPoint([125.1483667,-38.6842912]).appendPoint([102.85125,-38.6842912]).appendPoint([102.85125,-41.2842912]).appendArc([101.85125,-42.2842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([95.15125,-42.2842912]).appendArc([94.15125,-41.2842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([94.15125,-38.6842912]).appendPoint([89.50125,-38.6842912]).appendPoint([89.6668997,-57.3464425]).appendPoint([85.5077928,-57.7835822]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.6985068,-113.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[178.1483666,-41.1842912],"radius":1.1})
).union(
    CAG.circle({"center":[92.50125,-44.6842912],"radius":1.1})
).union(
    new CSG.Path2D([[108.4272505,-56.5517492],[122.4080639,-55.8190458]]).appendPoint([121.6753605,-41.8382324]).appendPoint([107.6945471,-42.5709358]).appendPoint([108.4272505,-56.5517492]).close().innerToCAG()
).union(
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

        