namespace SpriteKind {
    export const soul = SpriteKind.create()
    export const ring = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const health = SpriteKind.create()
    export const stun = SpriteKind.create()
    export const map = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    doug_houser.setImage(assets.image`myImage4`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.health, function (sprite, otherSprite) {
    info.setLife(3)
    otherSprite.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    doug_houser.setImage(assets.image`myImage`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    game.setDialogTextColor(0)
    game.showLongText("code: zzx", DialogLayout.Bottom)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.soul, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(-1)
    music.playMelody("C - - - - - - - ", 120)
})
info.onCountdownEnd(function () {
    info.setLife(0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    doug_houser.setImage(assets.image`myImage3`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    doug_houser.setImage(assets.image`myImage0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ring, function (sprite, otherSprite) {
    otherSprite.destroy()
    myDart.destroy()
    tiles.setTilemap(tilemap`level2`)
    pause(5000)
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(doug_houser, sprites.dungeon.floorDark0)
    info.startCountdown(6)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
    game.over(true, effects.starField)
    game.showLongText("you win", DialogLayout.Center)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.playTone(988, music.beat(BeatFraction.Half))
    pause(2000)
})
let end: Sprite = null
let myDart: Sprite = null
let shard: Sprite = null
let doug_houser: Sprite = null
game.setDialogTextColor(10)
game.showLongText("what a charming hotel, bring back any memories?", DialogLayout.Bottom)
game.showLongText("see those floating bits of crystal?", DialogLayout.Bottom)
game.showLongText("those are the last people to disappoint me here", DialogLayout.Bottom)
tiles.setTilemap(tilemap`level1`)
doug_houser = sprites.create(assets.image`myImage0`, SpriteKind.Player)
doug_houser.x = 320
doug_houser.y = 320
controller.moveSprite(doug_houser)
let ring = sprites.create(assets.image`myImage6`, SpriteKind.ring)
info.setScore(217)
info.setLife(3)
let music2 = 0
scene.cameraFollowSprite(doug_houser)
let heath = sprites.create(assets.image`myImage5`, SpriteKind.health)
tiles.placeOnRandomTile(heath, sprites.dungeon.floorDarkDiamond)
for (let value of tiles.getTilesByType(sprites.dungeon.floorDark2)) {
    shard = sprites.create(assets.image`myImage1`, SpriteKind.soul)
    tiles.placeOnTile(shard, value)
}
for (let value of tiles.getTilesByType(sprites.dungeon.floorDarkDiamond)) {
    myDart = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
    tiles.placeOnTile(myDart, value)
    myDart.follow(doug_houser, 90)
}
forever(function () {
    for (let value of tiles.getTilesByType(sprites.dungeon.floorLight2)) {
        end = sprites.create(assets.image`myImage7`, SpriteKind.portal)
        tiles.placeOnTile(myDart, value)
    }
    if (info.score() == 0) {
        music2 = 1
        ring.y = 314
        ring.x = 314
    }
    if (music2 == 0) {
        music.playTone(262, music.beat(BeatFraction.Triplet))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Triplet))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Triplet))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Triplet))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Triplet))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Sixteenth))
        music.playTone(659, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    if (music2 == 1) {
        music.playTone(131, music.beat(BeatFraction.Half))
        music.playTone(139, music.beat(BeatFraction.Half))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Half))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(185, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(208, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
    }
})
