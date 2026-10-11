setcpm (120/4)
samples('github:sonidosingapura/blu-mar-ten/main/Pads')


$:chord("Em7@2 Am7@3 D7@2 G7@3")
.sound("bmt_pads_8")
.lpf(300)
.scale("G:Major")
.adsr(".5:.100:.4:.5")
._pianoroll()

$:sound("bd*4, [- cp]*2").bank("RolandTR909")
.lpf(850)
._pianoroll()
$:s("[- hh]*4@4").bank("RolandTR909")._pianoroll()

$:chord("Em7@3 - [Am7@2 D7@0.5] G7")
.sound("bmt_pads_8")
.scale("G:minor")
.hpf(200)
.adsr("0.1:.100:.0.9:.1")
._pianoroll()
$:s("hh - - - - hh ").bank("RolandTR909")
._pianoroll()
