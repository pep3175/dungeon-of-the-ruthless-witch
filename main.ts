namespace SpriteKind {
    export const Trap = SpriteKind.create()
    export const Platform = SpriteKind.create()
    export const movingTrap = SpriteKind.create()
    export const Bumper = SpriteKind.create()
    export const Flier = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 1 4 4 1 4 1 1 7 4 4 1 4 1 
7 4 1 2 1 2 2 2 2 2 7 4 1 2 1 2 
7 1 2 1 2 2 2 2 2 2 7 1 2 1 2 2 
7 4 1 2 2 2 2 2 2 1 7 4 1 2 2 2 
7 1 2 2 2 2 2 2 2 2 7 1 2 2 2 2 
7 4 2 2 2 2 2 2 2 1 7 4 2 2 2 2 
7 1 2 1 2 1 1 2 1 7 7 1 2 2 2 2 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 1 4 4 7 7 4 1 4 4 4 1 4 4 
7 4 2 2 2 2 7 4 1 2 1 2 2 2 2 2 
7 1 2 2 2 2 7 1 2 1 2 2 2 2 2 2 
7 4 2 2 2 1 7 4 1 2 2 2 2 2 2 2 
7 1 2 2 2 2 7 1 2 2 2 2 2 2 2 2 
7 4 2 2 2 1 7 4 2 2 2 2 2 2 2 2 
7 1 2 2 1 1 7 1 2 2 2 2 1 2 1 1 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
4 4 4 1 4 4 1 4 1 1 7 4 4 1 4 1 
2 2 2 2 2 2 2 2 2 2 7 4 1 2 1 2 
2 2 2 2 2 2 2 2 2 2 7 1 2 1 2 2 
2 2 2 2 2 2 2 2 2 1 7 4 1 2 2 2 
2 2 2 2 2 2 2 2 2 2 7 1 2 2 2 2 
2 2 2 2 2 2 2 2 2 1 7 4 2 2 2 2 
2 1 2 1 1 2 1 1 1 1 7 1 2 2 2 2 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
1 4 1 1 1 1 7 4 4 1 4 4 2 4 1 1 
2 2 2 2 2 2 7 4 1 2 1 2 2 2 2 2 
2 2 2 2 2 2 7 1 2 1 2 2 2 2 2 2 
2 2 2 2 2 1 7 4 1 2 2 2 2 2 2 2 
2 2 2 2 2 2 7 1 2 2 2 2 2 2 2 2 
2 2 2 2 2 1 7 4 2 2 2 2 2 2 2 2 
2 1 2 1 1 1 7 7 2 2 2 2 1 2 1 1 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
4 4 4 1 4 4 1 4 1 1 7 4 4 1 4 7 
2 2 2 2 2 2 2 2 2 2 7 4 1 2 1 7 
2 2 2 2 2 2 2 2 2 2 7 1 2 1 2 7 
2 2 2 2 2 2 2 2 2 1 7 4 1 2 2 7 
2 2 2 2 2 2 2 2 2 2 7 1 2 2 2 7 
2 2 2 2 2 2 2 2 2 1 7 4 2 2 2 7 
2 1 2 1 1 2 1 1 1 7 7 1 2 2 2 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
1 4 1 1 1 1 7 7 4 1 4 4 2 4 1 7 
2 2 2 2 2 2 7 4 1 2 1 2 2 2 2 7 
2 2 2 2 2 2 7 1 2 1 2 2 2 2 2 7 
2 2 2 2 2 1 7 4 1 2 2 2 2 2 1 7 
2 2 2 2 2 2 7 1 2 2 2 2 2 2 2 7 
2 2 2 2 2 1 7 4 2 2 2 2 2 2 1 7 
2 1 2 1 1 1 7 1 2 2 2 1 2 1 1 7 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 1 4 4 1 4 1 1 7 4 4 1 4 1 
7 4 1 2 1 2 2 2 2 2 7 4 1 2 1 2 
7 1 2 1 2 2 2 2 2 2 7 1 2 1 2 2 
7 4 1 2 2 2 2 2 2 1 7 4 1 2 2 2 
7 1 2 2 2 2 2 2 2 2 7 1 2 2 2 2 
7 4 2 2 2 2 2 2 2 1 7 4 2 2 2 2 
7 1 2 1 2 1 1 2 1 7 7 1 2 2 2 2 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 1 4 4 7 7 4 1 4 4 4 1 4 4 
7 4 2 2 2 2 7 4 1 2 1 2 2 2 2 2 
7 1 2 2 2 2 7 1 2 1 2 2 2 2 2 2 
7 4 2 2 2 1 7 4 1 2 2 2 2 2 2 2 
7 1 2 2 2 2 7 1 2 2 2 2 2 2 2 2 
7 4 2 2 2 1 7 4 2 2 2 2 2 2 2 2 
7 1 2 2 1 1 7 1 2 2 2 2 1 2 1 1 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
4 4 4 1 4 4 1 4 1 1 7 4 4 1 4 1 
2 2 2 2 2 2 2 2 2 2 7 4 1 2 1 2 
2 2 2 2 2 2 2 2 2 2 7 1 2 1 2 2 
2 2 2 2 2 2 2 2 2 1 7 4 1 2 2 2 
2 2 2 2 2 2 2 2 2 2 7 1 2 2 2 2 
2 2 2 2 2 2 2 2 2 1 7 4 2 2 2 2 
2 1 2 1 1 2 1 1 1 1 7 1 2 2 2 2 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
1 4 1 1 1 1 7 4 4 1 4 4 2 4 1 1 
2 2 2 2 2 2 7 4 1 2 1 2 2 2 2 2 
2 2 2 2 2 2 7 1 2 1 2 2 2 2 2 2 
2 2 2 2 2 1 7 4 1 2 2 2 2 2 2 2 
2 2 2 2 2 2 7 1 2 2 2 2 2 2 2 2 
2 2 2 2 2 1 7 4 2 2 2 2 2 2 2 2 
2 1 2 1 1 1 7 1 2 2 2 2 1 2 1 1 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
4 4 4 1 4 4 1 4 1 1 7 4 4 1 4 7 
2 2 2 2 2 2 2 2 2 2 7 4 1 2 1 7 
2 2 2 2 2 2 2 2 2 2 7 1 2 1 2 7 
2 2 2 2 2 2 2 2 2 1 7 4 1 2 2 7 
2 2 2 2 2 2 2 2 2 2 7 1 2 2 2 7 
2 2 2 2 2 2 2 2 2 1 7 4 2 2 2 7 
2 1 2 1 1 2 1 1 1 7 7 1 2 2 2 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
1 4 1 1 1 1 7 7 4 1 4 4 2 4 1 7 
2 2 2 2 2 2 7 4 1 2 1 2 2 2 2 7 
2 2 2 2 2 2 7 1 2 1 2 2 2 2 2 7 
2 2 2 2 2 1 7 4 1 2 2 2 2 2 1 7 
2 2 2 2 2 2 7 1 2 2 2 2 2 2 2 7 
2 2 2 2 2 1 7 4 2 2 2 2 2 2 1 7 
2 1 2 1 1 1 7 1 2 2 2 1 2 1 1 7 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 1 4 4 1 4 1 1 7 4 4 1 4 1 
7 4 1 2 1 2 2 2 2 2 7 4 1 2 1 2 
7 1 2 1 2 2 2 2 2 2 7 1 2 1 2 2 
7 4 1 2 2 2 2 2 2 1 7 4 1 2 2 2 
7 1 2 2 2 2 2 2 2 2 7 1 2 2 2 2 
7 4 2 2 2 2 2 2 2 1 7 4 2 2 2 2 
7 1 2 1 2 1 1 2 1 7 7 1 2 2 2 2 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 1 4 4 7 7 4 1 4 4 4 1 4 4 
7 4 2 2 2 2 7 4 1 2 1 2 2 2 2 2 
7 1 2 2 2 1 7 1 2 1 2 2 2 2 2 2 
7 4 2 2 2 2 7 4 1 2 2 2 2 2 2 2 
7 1 2 2 2 1 7 1 2 2 2 2 2 2 2 2 
7 4 2 2 1 1 7 4 2 2 2 2 1 2 1 1 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
4 4 4 1 4 4 1 4 1 1 7 4 4 1 4 1 
2 2 2 2 2 2 2 2 2 2 7 4 1 2 1 2 
2 2 2 2 2 2 2 2 2 2 7 1 2 1 2 2 
2 2 2 2 2 2 2 2 2 1 7 4 1 2 2 2 
2 2 2 2 2 2 2 2 2 2 7 1 2 2 2 2 
2 2 2 2 2 2 2 2 2 1 7 4 2 2 2 2 
2 1 2 1 1 2 1 1 1 1 7 1 2 2 2 2 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
1 4 1 1 1 1 7 4 4 1 4 4 2 4 1 1 
2 2 2 2 2 2 7 4 1 2 1 2 2 2 2 2 
2 2 2 2 2 1 7 1 2 1 2 2 2 2 2 2 
2 2 2 2 2 2 7 4 1 2 2 2 2 2 2 2 
2 2 2 2 2 1 7 1 2 2 2 2 2 2 2 2 
2 1 2 1 1 1 7 4 2 2 2 2 1 2 1 1 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
4 4 4 1 4 4 1 4 1 1 7 4 4 1 4 7 
2 2 2 2 2 2 2 2 2 2 7 4 1 2 1 7 
2 2 2 2 2 2 2 2 2 2 7 1 2 1 2 7 
2 2 2 2 2 2 2 2 2 1 7 4 1 2 2 7 
2 2 2 2 2 2 2 2 2 2 7 1 2 2 2 7 
2 2 2 2 2 2 2 2 2 1 7 4 2 2 2 7 
2 1 2 1 1 2 1 1 1 7 7 1 2 2 2 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
1 4 1 1 1 1 7 7 4 1 4 4 2 4 1 7 
2 2 2 2 2 2 7 4 1 2 1 2 2 2 2 7 
2 2 2 2 2 1 7 1 2 1 2 2 2 2 1 7 
2 2 2 2 2 2 7 4 1 2 2 2 2 2 2 7 
2 2 2 2 2 1 7 1 2 2 2 2 2 2 1 7 
2 1 2 1 1 1 7 4 2 2 2 1 2 1 1 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 4 4 1 4 4 1 4 1 1 7 4 4 1 4 7 
7 4 1 2 1 2 2 2 2 2 7 4 1 2 1 7 
7 1 2 1 2 2 2 2 2 2 7 1 2 1 2 7 
7 4 1 2 2 2 2 2 2 1 7 4 1 2 2 7 
7 1 2 2 2 2 2 2 2 2 7 1 2 2 2 7 
7 4 2 2 2 2 2 2 2 1 7 4 2 2 2 7 
7 1 2 1 2 1 1 1 1 7 7 1 2 2 2 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 1 4 4 7 7 4 1 4 4 2 4 1 7 
7 4 2 2 2 2 7 4 1 2 1 2 2 2 2 7 
7 1 2 2 2 2 7 1 2 1 2 2 2 2 2 7 
7 4 2 2 2 1 7 4 1 2 2 2 2 2 1 7 
7 4 2 2 2 1 7 4 2 2 2 2 2 2 1 7 
7 1 2 2 1 1 7 1 2 2 2 1 2 1 1 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 4 4 1 4 4 4 1 4 4 1 4 1 1 1 7 
7 4 1 2 1 2 2 2 2 2 2 2 2 2 2 7 
7 1 2 1 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 1 2 2 2 2 2 2 2 2 2 2 2 2 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 2 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 2 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 1 1 7 
7 1 2 1 2 1 1 1 2 1 1 2 1 1 1 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
. 7 7 7 7 7 7 7 . . . . . . . . 
7 4 4 1 4 4 4 1 7 7 7 . . . . . 
7 4 1 2 1 2 2 2 2 2 1 7 . . . . 
7 1 2 1 2 2 2 2 2 2 2 1 7 . . . 
7 4 1 2 2 2 2 2 2 2 2 2 1 7 . . 
7 4 2 2 2 2 2 2 2 2 2 2 2 1 7 . 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 2 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 2 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 1 1 7 
7 1 2 1 2 1 1 1 2 1 1 2 1 1 1 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
. . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . 7 1 4 4 4 1 4 4 1 4 1 1 1 7 
. . 7 2 1 2 2 2 2 2 2 2 2 2 2 7 
. 7 2 1 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 1 2 2 2 2 2 2 2 2 2 2 2 2 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 7 . 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 1 7 
7 4 2 2 2 2 2 2 2 2 2 2 2 2 2 7 
7 1 2 2 2 2 2 2 2 2 2 2 2 2 7 . 
7 1 2 2 2 2 2 2 2 2 2 2 2 7 . . 
7 1 2 1 2 1 1 1 2 1 1 2 1 7 . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
`
    //% blockIdentity=images._tile
    export const tile14 = img`
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. 7 4 4 2 2 2 2 2 2 2 2 2 2 7 . 
7 4 4 1 4 1 1 1 1 1 1 1 1 2 2 7 
7 4 4 1 4 1 1 1 1 1 1 1 1 2 2 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
`
    //% blockIdentity=images._tile
    export const tile15 = img`
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 4 4 1 4 1 1 1 1 1 1 1 1 2 2 7 
7 4 4 1 4 1 1 1 1 1 1 1 1 2 2 7 
. 7 4 4 2 2 2 2 2 2 2 2 2 2 7 . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
`
    //% blockIdentity=images._tile
    export const tile16 = img`
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
`
    //% blockIdentity=images._tile
    export const tile17 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 7 . . . 7 7 7 . 7 7 . . . 
. . 7 4 7 . 7 1 1 2 7 2 2 7 . . 
. . 7 4 4 7 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
`
    //% blockIdentity=images._tile
    export const tile18 = img`
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 1 4 1 1 2 1 2 2 7 . . 
. . 7 4 4 7 4 1 1 2 1 2 2 7 . . 
. . 7 4 7 . 7 1 1 2 7 2 2 7 . . 
. . . 7 . . . 7 7 7 . 7 7 . . . 
`
    //% blockIdentity=images._tile
    export const tile19 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . . . 7 . . . 
. . . 7 a 7 . . . . . 7 a 7 . . 
. . . 7 a 7 . . . . . 7 a 7 . . 
. . 7 d a 5 7 . . . 7 d a 5 7 . 
. . 7 d a 5 7 . . . 7 d a 5 7 . 
. 7 d a a a 5 7 . 7 d a a a 5 7 
. 7 d a a a 5 7 . 7 d a a a 5 7 
7 d a a a a a 5 7 d a a a a a 5 
`
    //% blockIdentity=images._tile
    export const tile20 = img`
7 d a a a a a 5 7 d a a a a a 5 
. 7 d a a a 5 7 . 7 d a a a 5 7 
. 7 d a a a 5 7 . 7 d a a a 5 7 
. . 7 d a 5 7 . . . 7 d a 5 7 . 
. . 7 d a 5 7 . . . 7 d a 5 7 . 
. . . 7 a 7 . . . . . 7 a 7 . . 
. . . 7 a 7 . . . . . 7 a 7 . . 
. . . . 7 . . . . . . . 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile21 = img`
7 . . . . . . . . . . . . . . . 
d 7 7 . . . . . . . . . . . . . 
a d d 7 7 . . . . . . . . . . . 
a a a d d 7 7 . . . . . . . . . 
a a a a a a a 7 . . . . . . . . 
a a a 5 5 7 7 . . . . . . . . . 
a 5 5 7 7 . . . . . . . . . . . 
5 7 7 . . . . . . . . . . . . . 
7 . . . . . . . . . . . . . . . 
d 7 7 . . . . . . . . . . . . . 
a d d 7 7 . . . . . . . . . . . 
a a a d d 7 7 . . . . . . . . . 
a a a a a a a 7 . . . . . . . . 
a a a 5 5 7 7 . . . . . . . . . 
a 5 5 7 7 . . . . . . . . . . . 
5 7 7 . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile22 = img`
. . . . . . . . . . . . . . . 7 
. . . . . . . . . . . . . 7 7 d 
. . . . . . . . . . . 7 7 d d a 
. . . . . . . . . 7 7 d d a a a 
. . . . . . . . 7 a a a a a a a 
. . . . . . . . . 7 7 5 5 a a a 
. . . . . . . . . . . 7 7 5 5 a 
. . . . . . . . . . . . . 7 7 5 
. . . . . . . . . . . . . . . 7 
. . . . . . . . . . . . . 7 7 d 
. . . . . . . . . . . 7 7 d d a 
. . . . . . . . . 7 7 d d a a a 
. . . . . . . . 7 a a a a a a a 
. . . . . . . . . 7 7 5 5 a a a 
. . . . . . . . . . . 7 7 5 5 a 
. . . . . . . . . . . . . 7 7 5 
`
    //% blockIdentity=images._tile
    export const tile23 = img`
c e e c e e e c e c e e c e e c 
c c c c c c c c c c c c c c c c 
c c c e c c c c c e c c c c e c 
e c c 9 c c e c c 9 c c e c 9 c 
9 c c c c c 9 c c c c c 9 c c c 
9 9 9 c 9 9 c 9 c 9 9 c 9 9 9 c 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile24 = img`
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 e e e e c e e c e e e c e e 7 
7 e 7 c c c c c c c c c c 7 c 7 
7 e c c c c c c c c c c c c c 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 e e e 7 e e 7 e e e 7 e e e 7 
7 e e c 7 e c 7 e e c 7 e e c 7 
7 e c c 7 e c 7 e c c 7 e c c 7 
7 e c c 7 e c 7 e c c 7 e c c 7 
7 e c c 7 e c 7 e c c 7 e c c 7 
7 e c c 7 e c 7 e c c 7 e c c 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 e e e e c e e c e e e c e e 7 
7 e 7 c c c c c c c c c c 7 c 7 
7 e c c c c c c c c c c c c c 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
`
    //% blockIdentity=images._tile
    export const tile25 = img`
. . . . . . 5 . . . . . . . . . 
. . . . . . d . . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . . d . . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . . d . . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . d . 5 . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile26 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 e e e c e e c e e e c e e e e 
7 e e c c c c c c c c c c c c c 
7 e 7 c c c c c c c c c c c c c 
7 c c c c c c c c c c c c c c c 
7 e c c c c c c c c c c c c c c 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 e e e e e e 7 . . . . . . . 
7 e c c c c c 7 . . . . . . . . 
7 e c 7 c c 7 . . . . . . . . . 
7 c c c c 7 . . . . . . . . . . 
7 e c c 7 . . . . . . . . . . . 
7 c c 7 . . . . . . . . . . . . 
7 c 7 . . . . . . . . . . . . . 
7 7 . . . . . . . . . . . . . . 
7 . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile27 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e e e e c e e c e e e c e e e 7 
e e c c c c c c c c c c c c c 7 
e c 7 c c c c c c c c c c 7 c 7 
e c c c c c c c c c c c c c c 7 
e c c c c c c c c c c c c c c 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 e e e e e e 7 . 
. . . . . . . . 7 c c c c c e 7 
. . . . . . . . . 7 c c 7 c c 7 
. . . . . . . . . . 7 c c c e 7 
. . . . . . . . . . . 7 c c e 7 
. . . . . . . . . . . . 7 c c 7 
. . . . . . . . . . . . . 7 c 7 
. . . . . . . . . . . . . . 7 7 
. . . . . . . . . . . . . . . 7 
`
    //% blockIdentity=images._tile
    export const tile28 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 e e e e c e e c e e e c e e 7 
7 e e c c c c c c c c c c c c 7 
7 e 7 c c c c c c c c c c 7 c 7 
7 e c c c c c c c c c c c c c 7 
7 e c c c c c c c c c c c c c 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile29 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 1 1 2 2 2 2 2 2 2 2 1 2 2 2 
2 2 1 1 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 1 1 1 1 2 2 2 2 2 
2 2 2 2 2 2 2 1 1 1 1 2 2 1 1 2 
2 2 2 2 2 2 2 1 1 1 1 2 2 1 1 2 
2 2 2 2 2 2 2 1 1 1 1 2 2 2 2 2 
2 2 2 1 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 2 
2 1 1 2 2 2 2 2 2 1 2 2 1 1 1 2 
2 1 1 2 2 2 2 2 2 2 2 2 1 1 1 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile30 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 . 2 2 . 2 2 . . . 
. . . 2 2 2 2 . 2 2 . 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile31 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile32 = img`
. . . . . . . . . . . . . 1 7 f 
. . . . . . . . . . . . 1 1 8 f 
. . . . . . . . . . . 1 1 1 8 f 
. . . . . . . . . . 1 1 1 1 8 f 
. . . . . . . . . 1 1 1 1 1 8 f 
. . . . . . . . 1 1 1 1 1 1 8 f 
. . . . . . . 1 1 1 1 1 1 1 8 f 
. . . . . . 1 1 1 1 1 1 1 1 8 f 
. . . . . 1 1 1 1 1 1 1 1 1 8 f 
. . . . 1 1 1 1 1 1 1 1 1 1 8 f 
. . . 1 1 1 1 1 1 1 1 1 1 1 8 f 
. . 1 1 1 1 1 1 1 1 1 1 1 1 8 f 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 8 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 f 
`
    //% blockIdentity=images._tile
    export const tile33 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`
    //% blockIdentity=images._tile
    export const tile34 = img`
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 3 b b b b b b b 7 . . . 
. . . 7 3 b 6 6 b b b 6 7 . . . 
. . . 7 3 b 7 7 b b b 7 7 . . . 
. . . 7 3 b 7 7 b b b 7 7 . . . 
. . . 7 3 b 6 6 b b b 6 7 . . . 
. . . 7 6 b 7 b 7 b 7 b 6 . . . 
. . . 7 7 6 7 7 7 b 7 6 7 . . . 
. . . 7 7 7 7 7 7 6 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 6 7 7 7 6 7 7 7 7 7 7 . . 
. 7 7 6 7 6 7 b 7 6 7 6 3 7 7 . 
. 7 7 3 3 6 6 b b b b b b 7 7 . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
`
    //% blockIdentity=images._tile
    export const tile35 = img`
. . . . . . . . . . . . . . . . 
. . 2 2 . . . . . . . . . . . . 
. . 2 2 2 2 . . . . . . . . . . 
. . 2 2 2 2 2 . . . . . . . . . 
. . 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 . . . . . . . . . . 
. . 2 2 . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.movingTrap, function (sprite, otherSprite) {
    sprite.startEffect(effects.spray)
    info.changeLifeBy(-1)
    hero.say("Aie !", 2000)
    pause(invincibilityPeriod)
    effects.clearParticles(sprite)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile25, function (sprite, location) {
    if (controller.up.isPressed()) {
        sprite.vy = -50
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile32, function (sprite, location) {
    game.splash("Level cleared !")
    currentLevel += 1
    clearLevel()
    initializeLevel(currentLevel)
})
function placeMovingPlatforms () {
    for (let value of tiles.getTilesByType(myTiles.tile31)) {
        movingPlatformH = sprites.create(img`
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 e e e e c e e c e e e e c e 7 
7 e e c c c c c c c c c c c c 7 
7 e c c c c c c c c c c c c c 7 
7 e c c c c c c c c c c c c c 7 
7 e c c c c c c c c c c c c c 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Platform)
        tiles.placeOnTile(movingPlatformH, value)
    }
    MovingPlatformsList = sprites.allOfKind(SpriteKind.Platform)
}
function animateHero () {
    if (heroState == "dashing") {
        hero.setImage(img`
. 7 7 7 7 7 7 7 . . . . . . . . 
7 4 4 4 9 9 9 9 7 . . . . . . . 
. 7 7 7 4 4 9 9 9 7 . . . . . . 
. . . . 7 4 4 9 9 7 . . . . . . 
. . b 7 7 7 4 4 7 7 7 7 7 . . . 
. b b 7 b b b b b b f f 7 . . . 
b b b 7 b b 5 5 5 5 5 5 7 7 7 . 
b b b 7 b b 5 b b b b b f f 7 . 
b b b 7 b b 5 b 5 b 5 b 5 f 7 . 
b b b 7 b b 5 b 5 b 5 b 5 f 7 . 
b b b 7 b b 5 b 5 b 5 b 5 f 7 . 
b b b 7 b b 5 b b b b b f f 7 . 
b b b 7 b b 5 5 5 5 5 5 7 7 7 . 
b b b 7 b b b b b b b f 7 . . . 
. b b 7 5 5 5 5 5 5 5 b 7 . . . 
. . b 7 b b b b b b b f 7 . . . 
. . 7 7 b b b b b b b f 7 . . . 
. 7 5 5 5 5 7 7 7 7 5 5 7 . . . 
. 7 7 7 7 7 . . . 7 5 7 . . . . 
. . . . . . . . . 7 7 . . . . . 
`)
    }
    if (heroState == "idle") {
        hero.setImage(img`
. . . . . . . . . . . . . . . . 
. . . 7 7 7 7 7 . . . . . . . . 
. . 7 4 9 9 9 9 7 . . . . . . . 
. 7 4 7 4 4 9 9 9 7 . . . . . . 
7 4 7 . 7 4 4 9 9 7 . . . . . . 
. 7 . 7 7 7 4 4 7 7 7 7 7 . . . 
. . . 7 d d d d d d f f 7 . . . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 5 5 5 5 5 d 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 7 7 7 7 5 5 7 . . . 
. . . 7 7 7 . . . . 7 7 7 . . . 
`)
    }
    if (heroState == "jumping") {
        hero.setImage(img`
. . . 7 7 7 7 7 . . . . . . . . 
. . 7 9 9 9 9 9 7 . . . . . . . 
. 7 9 9 4 4 9 9 9 7 . . . . . . 
. 7 4 4 7 4 4 9 9 7 . . . . . . 
. 7 4 7 7 7 4 4 7 7 7 7 7 . . . 
. 7 4 7 d d d d d d f f 7 . . . 
. . 7 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 5 5 5 5 5 5 5 7 . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 5 5 5 5 5 d 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 7 7 7 7 5 5 7 . . . 
. . . 7 5 7 . . . 7 5 7 . . . . 
. . . 7 7 . . . . 7 7 . . . . . 
`)
    }
    if (heroState == "falling") {
        hero.setImage(img`
. 7 . . . . . . . . . . . . . . 
7 9 7 7 7 . . . . . . . . . . . 
7 9 9 9 9 7 7 7 . . . . . . . . 
. 7 7 9 9 9 9 9 7 . . . . . . . 
. . . 7 4 4 9 9 9 7 . . . . . . 
. . . . 7 4 4 9 9 7 . . . . . . 
. . . 7 7 7 4 4 7 7 7 7 7 . . . 
. . . 7 d d d d d d f f 7 . . . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 5 5 5 5 5 d 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . 7 5 5 d d d d d d 5 5 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
`)
    }
    if (heroState == "running") {
        if (hero.x % 2 == 0) {
            hero.setImage(img`
. 7 7 7 7 7 7 7 . . . . . . . . 
7 4 4 4 9 9 9 9 7 . . . . . . . 
. 7 7 7 4 4 9 9 9 7 . . . . . . 
. . . . 7 4 4 9 9 7 . . . . . . 
. . . 7 7 7 4 4 7 7 7 7 7 . . . 
. . . 7 d d d d d d f f 7 . . . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 5 5 5 5 5 d 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . 7 7 d d d d d d d f 7 . . . 
. 7 5 5 5 5 7 7 7 7 5 5 7 . . . 
. 7 7 7 7 7 . . . 7 5 7 . . . . 
. . . . . . . . . 7 7 . . . . . 
`)
        } else {
            hero.setImage(img`
. 7 7 7 7 7 7 7 . . . . . . . . 
7 4 4 4 9 9 9 9 7 . . . . . . . 
. 7 7 7 4 4 9 9 9 7 . . . . . . 
. . . . 7 4 4 9 9 7 . . . . . . 
. . . 7 7 7 4 4 7 7 7 7 7 . . . 
. . . 7 d d d d d d f f 7 . . . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 5 5 5 5 5 d 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . 7 5 5 5 7 7 7 7 7 5 5 7 . . 
. . 7 5 7 7 . . . . . 7 7 7 . . 
. . 7 7 . . . . . . . . . . . . 
`)
        }
    }
    if (heroDirection == "left") {
        hero.image.flipX()
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile23, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trap, function (sprite, otherSprite) {
    sprite.startEffect(effects.spray)
    info.changeLifeBy(-1)
    hero.say("Aie !", 2000)
    music.playTone(262, music.beat(BeatFraction.Half))
    pause(invincibilityPeriod)
    effects.clearParticles(sprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    heroState = "dashing"
    if (heroDirection == "right") {
        hero.vx = 300
        pause(200)
        hero.vx = 0
    }
    if (heroDirection == "left") {
        hero.vx = -300
        pause(200)
        hero.vx = 0
    }
})
function changeHeroState () {
    if (hero.vx == 0 && hero.vy == 0) {
        heroState = "idle"
    } else {
        if (hero.vx != 0) {
            heroState = "running"
        }
        if (hero.vy > 0) {
            heroState = "falling"
        }
        if (hero.vy < 0) {
            heroState = "jumping"
        }
        if ((hero.isHittingTile(CollisionDirection.Left) || hero.isHittingTile(CollisionDirection.Right)) && heroState == "falling") {
            hero.vy = 0
        }
        if (hero.vx > 0) {
            heroDirection = "right"
        } else {
            if (hero.vx < 0) {
                heroDirection = "left"
            }
        }
        for (let value22 of MovingPlatformsList) {
            if (hero.overlapsWith(value22)) {
                heroState = "idle"
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        sprite.vy = -100
        otherSprite.destroy()
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else {
        sprite.startEffect(effects.spray)
        info.changeLifeBy(-1)
        sprite.say("Hé !", 2000)
        pause(invincibilityPeriod)
        effects.clearParticles(sprite)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.vy == 0) {
        hero.vy = -180
        jump = false
        music.playTone(932, music.beat(BeatFraction.Sixteenth))
    } else {
        if (jump == false) {
            if (hero.vy > -60 && hero.vy < 60) {
                hero.vy = -120
                jump = true
            }
        }
    }
})
function createEnemies () {
    for (let value6 of tiles.getTilesByType(myTiles.tile30)) {
        bumper = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 3 b b b b b b b 7 . . . 
. . . 7 3 b 6 6 b b b 6 7 . . . 
. . . 7 3 b 7 7 b b b 7 7 . . . 
. . . 7 3 b 7 7 b b b 7 7 . . . 
. . . 7 3 b 6 6 b b b 6 7 . . . 
. . 7 7 6 b 7 b 7 b 7 b 6 7 . . 
. 7 7 7 7 6 7 7 7 b 7 6 7 7 7 . 
. 7 7 7 7 7 7 7 7 6 7 7 7 7 7 . 
7 7 7 6 7 7 7 6 7 7 7 7 7 7 7 7 
7 3 7 6 7 6 7 b 7 6 7 6 7 6 7 7 
7 3 3 3 3 6 6 b b b b b b b b 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Bumper)
        tiles.placeOnTile(bumper, value6)
        bumper.ay = gravity
        animation.runImageAnimation(
        bumper,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 3 b b b b b b b 7 . . . 
. . . 7 3 b 6 6 b b b 6 7 . . . 
. . . 7 3 b 7 7 b b b 7 7 . . . 
. . . 7 3 b 7 7 b b b 7 7 . . . 
. . . 7 3 b 6 6 b b b 6 7 . . . 
. . 7 7 6 b 7 b 7 b 7 b 6 7 . . 
. 7 7 7 7 6 7 7 7 b 7 6 7 7 7 . 
. 7 7 7 7 7 7 7 7 6 7 7 7 7 7 . 
7 7 7 6 7 7 7 6 7 7 7 7 7 7 7 7 
7 3 7 6 7 6 7 b 7 6 7 6 7 6 7 7 
7 3 3 3 3 6 6 b b b b b b b b 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`,img`
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 3 b b b b b b b 7 . . . 
. . . 7 3 b 6 6 b b b 6 7 . . . 
. . . 7 3 b 7 7 b b b 7 7 . . . 
. . . 7 3 b 7 7 b b b 7 7 . . . 
. . . 7 3 b 6 6 b b b 6 7 . . . 
. . . 7 6 b 7 b 7 b 7 b 6 . . . 
. . . 7 7 6 7 7 7 b 7 6 7 . . . 
. . . 7 7 7 7 7 7 6 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 6 7 7 7 6 7 7 7 7 7 7 . . 
. 7 7 6 7 6 7 b 7 6 7 6 3 7 7 . 
. 7 7 3 3 6 6 b b b b b b 7 7 . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
`],
        500,
        true
        )
        if (Math.percentChance(50)) {
            bumper.vx = Math.randomRange(30, 60)
        } else {
            bumper.vx = Math.randomRange(-60, -30)
        }
    }
}
function placeMovingTraps () {
    for (let value2 of tiles.getTilesByType(myTiles.tile33)) {
        circSaw = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . 7 7 7 a d d 7 7 7 . . . . 
. . 7 a d d a a d a a a 7 . . . 
. . 7 a d a a a a a a d 7 7 7 . 
. 7 7 a a a a a a a a a a a a 7 
7 a d a a a a a a a a a a d d 7 
7 a a a a a 5 7 7 5 a a a a d 7 
7 a a a a 5 7 . . 7 5 a a a a 7 
7 d a a a 7 . . . . 7 a a a a a 
a a a a 5 7 . . . . 7 5 a a d a 
`, SpriteKind.movingTrap)
        tiles.placeOnTile(circSaw, value2)
    }
    MovingTrapsList = sprites.allOfKind(SpriteKind.movingTrap)
}
function placeTraps () {
    for (let value222 of tiles.getTilesByType(myTiles.tile20)) {
        spikesUp = sprites.create(img`
7 d a a a a a 5 7 d a a a a a 5 
. 7 d a a a 5 7 . 7 d a a a 5 7 
. 7 d a a a 5 7 . 7 d a a a 5 7 
. . 7 d a 5 7 . . . 7 d a 5 7 . 
. . 7 d a 5 7 . . . 7 d a 5 7 . 
. . . 7 a 7 . . . . . 7 a 7 . . 
. . . 7 a 7 . . . . . 7 a 7 . . 
. . . . 7 . . . . . . . 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Trap)
        tiles.placeOnTile(spikesUp, value222)
    }
    for (let value2222 of tiles.getTilesByType(myTiles.tile22)) {
        spikesRight = sprites.create(img`
. . . . . . . . . . . . . . . 7 
. . . . . . . . . . . . . 7 7 d 
. . . . . . . . . . . 7 7 d d a 
. . . . . . . . . 7 7 d d a a a 
. . . . . . . . 7 a a a a a a a 
. . . . . . . . . 7 7 5 5 a a a 
. . . . . . . . . . . 7 7 5 5 a 
. . . . . . . . . . . . . 7 7 5 
. . . . . . . . . . . . . . . 7 
. . . . . . . . . . . . . 7 7 d 
. . . . . . . . . . . 7 7 d d a 
. . . . . . . . . 7 7 d d a a a 
. . . . . . . . 7 a a a a a a a 
. . . . . . . . . 7 7 5 5 a a a 
. . . . . . . . . . . 7 7 5 5 a 
. . . . . . . . . . . . . 7 7 5 
`, SpriteKind.Trap)
        tiles.placeOnTile(spikesRight, value2222)
    }
    for (let value3 of tiles.getTilesByType(myTiles.tile21)) {
        spikesLeft = sprites.create(img`
7 . . . . . . . . . . . . . . . 
d 7 7 . . . . . . . . . . . . . 
a d d 7 7 . . . . . . . . . . . 
a a a d d 7 7 . . . . . . . . . 
a a a a a a a 7 . . . . . . . . 
a a a 5 5 7 7 . . . . . . . . . 
a 5 5 7 7 . . . . . . . . . . . 
5 7 7 . . . . . . . . . . . . . 
7 . . . . . . . . . . . . . . . 
d 7 7 . . . . . . . . . . . . . 
a d d 7 7 . . . . . . . . . . . 
a a a d d 7 7 . . . . . . . . . 
a a a a a a a 7 . . . . . . . . 
a a a 5 5 7 7 . . . . . . . . . 
a 5 5 7 7 . . . . . . . . . . . 
5 7 7 . . . . . . . . . . . . . 
`, SpriteKind.Trap)
        tiles.placeOnTile(spikesLeft, value3)
    }
    for (let value4 of tiles.getTilesByType(myTiles.tile19)) {
        spikesDown = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . . . 7 . . . 
. . . 7 a 7 . . . . . 7 a 7 . . 
. . . 7 a 7 . . . . . 7 a 7 . . 
. . 7 d a 5 7 . . . 7 d a 5 7 . 
. . 7 d a 5 7 . . . 7 d a 5 7 . 
. 7 d a a a 5 7 . 7 d a a a 5 7 
. 7 d a a a 5 7 . 7 d a a a 5 7 
7 d a a a a a 5 7 d a a a a a 5 
`, SpriteKind.Trap)
        tiles.placeOnTile(spikesDown, value4)
    }
}
function placePlatforms () {
    for (let value5 of tiles.getTilesByType(myTiles.tile26)) {
        if (hero.tileKindAt(TileDirection.Bottom, myTiles.tile26)) {
            tiles.setWallAt(value5, true)
        } else {
            tiles.setWallAt(value5, false)
        }
    }
    for (let value52 of tiles.getTilesByType(myTiles.tile28)) {
        if (hero.tileKindAt(TileDirection.Bottom, myTiles.tile28)) {
            tiles.setWallAt(value52, true)
        } else {
            tiles.setWallAt(value52, false)
        }
    }
    for (let value53 of tiles.getTilesByType(myTiles.tile27)) {
        if (hero.tileKindAt(TileDirection.Bottom, myTiles.tile27)) {
            tiles.setWallAt(value53, true)
        } else {
            tiles.setWallAt(value53, false)
        }
    }
}
function clearLevel () {
    for (let value of sprites.allOfKind(SpriteKind.movingTrap)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Trap)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Bumper)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Platform)) {
        value.destroy()
    }
}
function initializeLevel (level: number) {
    if (level == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`340010000b151d0000000000000000001d0000000000000004060000000f001d19000405060019000000000000000000000000000000000d0b15001d000000210000001d00001e00001d000004060000000e1d001900040506001900001d0000000000000000001d00000020231d00001c1b010202020202020202020300000004061a1c0103000019000405060019001d001e0000001d001d0000000016010300000000000007080808080808080808090000000406000004061a001900040506001900000102020b030000001d0000000004060202020300000014000f1d0000000f00000000000406000004060000190004050600190000040b05050600000000000000000406050808080900000000100000000010000000000004060000040600001900040506001900160405050506150000000000000c0406060000000f00001d001000000000100000001c1b04060000040600001900040506000000000405050b0600000000160102020406060c001d0e0000001d0e001e001e0e1d000000000709000004030000190004050600000016070808080915000000000708080406060000160102031500010202020203001d0000000f001d0004061d001900040506150000000000000000000000000000190004060600001604050915000405050505061a1c000000101d00000406001d190004050615000000000000001d00001f0000001916040606000102050600000007080808080915000000000e00000004060000190004050615000000001d00000000000000000019000406080205050506000000001d000f00000000001301030000000406000000000708091500000000001d0000000000000000191604060004050505061d00001d00001000000000010205060000000406000000000000000000000000000000000000000000001900040600070505080900000a001d210e00000b02050505060000000406000000000000000000000000000000000000000000000016040600000406000000000000000102020205050505050600000004061a1c1c1c1b0103001f0000001f0000001f0000000a130102020617170406171717171717170405050505050505050617171704061717171717040617171717171717171717171717010205050506`,
            img`
2 . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 . . 2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . 2 2 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 . . 2 2 . . . . 2 2 2 . . . . 2 2 2 2 2 . . . . . . . . 2 2 
2 2 2 2 . . . . . . . . . . . . . . . . 2 2 . . 2 2 . . . . 2 2 2 . . . . 2 2 2 2 2 . . . . . . . . 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 . . 2 2 . . . . 2 2 2 . . . . 2 2 2 2 2 . . . . . . . 2 2 2 
2 . . . . . . . . . . . . . . . . . . . 2 2 . . 2 2 . . . . 2 2 2 . . . . 2 2 2 2 2 . . . . . 2 2 2 2 2 
2 2 . . . . . . . . . . . . . . . . . . 2 2 . . 2 2 . . . . 2 2 2 . . . . 2 2 2 2 2 . . . . . 2 2 2 2 2 
2 . . . 2 2 2 . . 2 2 2 2 2 2 . . . . . . . . . 2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . 2 2 
2 . . . 2 2 2 . . 2 2 2 2 2 2 . . . . . . . . . 2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . 2 2 
2 . 2 2 2 2 . . . 2 2 2 2 2 2 . . . . . . . . . 2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 . . . 2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . 2 2 
. 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. 2 2 2 2 2 . . 2 . . . . . . 2 2 2 2 2 2 . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 2 . . . . . 2 2 . . . . . . . . . . . . . 2 . 2 2 2 2 
. . 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 2 . . . . . 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35],
            TileScale.Sixteen
        ))
    } else {
        if (level == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`1000300000000000000000000000000000000000000000000000000000000000000000000b0b0b0b0b0b0b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b0b0b0b0b0b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b0b0b0b0b0b000000000000000000000000000000000000000000000000000000000000000000000000000b0b0b0b0b0b000000000000000000000000000000000000000000000000000000000000000000000000000b0b0b0b0b0b0b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000000000b0000000000000000000000000000000b00000b0b0b0b0b0b0b0b0b0b0b0b0b0b0000000000000000000000000000000b0000000000000000000000000000000b0000000000000000000000000000000b0b0b0b0b0b0b0b0b0b0b0b000000000b0000000000000000000000000000000b0000000000000000000000000000000b0000000000000000000000000000000b0b0b0b0b0b0b0000000b0b0b0b0b0b0b00000000000000000000000000000019000000000000000000000000000000190000000000000000000000000000001900000000000000000000000000000019000000000000000000000000000000190000000000000000000000000000001923000000000000000000000000000019000000000000000000000000000000190b00001f0000001f0000001f0000000017171717171717171717171717171717`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35],
            TileScale.Sixteen
        ))
        }
    }
    placeTraps()
    placeMovingTraps()
    placeMovingPlatforms()
    createEnemies()
    hero.ay = gravity
    hero.setVelocity(0, 0)
    tiles.placeOnRandomTile(hero, myTiles.tile35)
    scene.cameraFollowSprite(hero)
    heroState = "idle"
    heroDirection = "right"
}
let movingClock = false
let spikesDown: Sprite = null
let spikesLeft: Sprite = null
let spikesRight: Sprite = null
let spikesUp: Sprite = null
let MovingTrapsList: Sprite[] = []
let circSaw: Sprite = null
let bumper: Sprite = null
let jump = false
let heroDirection = ""
let heroState = ""
let MovingPlatformsList: Sprite[] = []
let movingPlatformH: Sprite = null
let currentLevel = 0
let hero: Sprite = null
let invincibilityPeriod = 0
let gravity = 0
// image.setPalette(palettes.Equpix15)
scene.setBackgroundColor(2)
game.showLongText("Ah ah ah ! My little Hero, you are trapped. Neither your double jump, dash or wall jump will help you escape. You'll die in this maze of death ! The Ruthless Witch.", DialogLayout.Full)
gravity = 400
invincibilityPeriod = 2000
hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 7 7 7 7 7 . . . . . . . . 
. . 7 9 c c c c 7 . . . . . . . 
. 7 9 7 9 9 c c c 7 . . . . . . 
7 9 7 . 7 9 9 c c 7 . . . . . . 
. 7 . 7 7 7 9 9 7 7 7 7 7 . . . 
. . . 7 d d d d d d f f 7 . . . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d 5 d 5 d 5 f 7 . 
. . . 7 d d 5 d d d d d f f 7 . 
. . . 7 d d 5 5 5 5 5 5 7 7 7 . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 5 5 5 5 5 d 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 d d d d d d d f 7 . . . 
. . . 7 5 5 7 7 7 7 5 5 7 . . . 
. . . 7 7 7 . . . . 7 7 7 . . . 
`, SpriteKind.Player)
controller.moveSprite(hero, 100, 0)
info.setLife(3)
currentLevel = 2
initializeLevel(currentLevel)
game.onUpdateInterval(2000, function () {
    if (movingClock == false) {
        for (let value62 of MovingPlatformsList) {
            value62.vx = 20
        }
        for (let value7 of MovingTrapsList) {
            value7.vx = 20
        }
        movingClock = true
    } else {
        for (let value72 of MovingPlatformsList) {
            value72.vx = -20
        }
        for (let value8 of MovingTrapsList) {
            value8.vx = -20
        }
        movingClock = false
    }
})
game.onUpdate(function () {
    changeHeroState()
    animateHero()
    for (let value82 of MovingPlatformsList) {
        if (hero.overlapsWith(value82)) {
            hero.ay = 0
            hero.y = value82.y - 17
            hero.vy = value82.vy
            hero.vx = value82.vx
        } else {
            hero.ay = gravity
        }
    }
    placePlatforms()
    if (hero.y >= 235) {
    	
    }
})
game.onUpdate(function () {
    for (let value822 of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value822.isHittingTile(CollisionDirection.Left) || value822.tileKindAt(TileDirection.Left, myTiles.tile29)) {
            value822.vx = Math.randomRange(30, 60)
        } else if (value822.isHittingTile(CollisionDirection.Right) || value822.tileKindAt(TileDirection.Right, myTiles.tile29)) {
            value822.vx = Math.randomRange(-60, -30)
        }
    }
})
