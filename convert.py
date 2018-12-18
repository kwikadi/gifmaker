## Creating gif using imageio
#gif.py 
import sys
import datetime
import imageio
import os

VALID_EXTENSIONS = ('png', 'jpg')


def create_gif(path, duration):
    filenames = os.listdir(path)
    images = []
    for filename in filenames:
        images.append(imageio.imread(filename))
    # output_file = os.path.join(path,'Gif-%s.gif' % datetime.datetime.now().strftime('%Y-%M-%d-%H-%M-%S'))
    # imageio.mimsave(output_file, images, duration=duration)
    print(images)


# if __name__ == "__main__":
#     script = sys.argv.pop(0)

#     if len(sys.argv) < 2:
#         print('Usage: python {} <duration> <path to images separated by space>'.format(script))
#         sys.exit(1)

#     duration = float(sys.argv.pop(0))
#     filenames = sys.argv


#     if not all(f.lower().endswith(VALID_EXTENSIONS) for f in filenames):
#         print('Only png and jpg files allowed')
#         sys.exit(1)

#     create_gif(filenames, duration)